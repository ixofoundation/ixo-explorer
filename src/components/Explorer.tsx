import * as React from 'react';
import { Link } from 'react-router-dom';
import { Connection } from '../blockchain/Connection';
import { NewBlockEvent, BlockQueue } from '../blockchain/BlockQueue';

var base64 = require('base-64');
var moment = require('moment');

var styles = {
    header: {
        color: 'white'
    },

    rowCenter: {
        textAlign: 'center'
    },

    button: {
        margin: '5px 5px 5px 5px'
    }
};

export interface Props {
    history: string;
}
export interface State {
    data: any;
    paused: boolean;
    chainUri: string;
    lastBlockHeight: string;
    syncBlock: number;
    blockQueue?: BlockQueue;
}

class Explorer extends React.Component<Props, State> {

    constructor(props?: any, context?: any) {
        super(props, context);
        this.state = {
            data: [],
            paused: false,
            chainUri: 'localhost:46657',
            lastBlockHeight: '-1',
            syncBlock: -1,
        };
    }

    subscribeToChain(chainUri: string) {
        var ws = new WebSocket('ws://' + chainUri + '/websocket');
        ws.onmessage = event => {
            var blockData = this.parseEvent(event);
            if (blockData.blockHash !== undefined) {
                if (!this.state.paused) {
                    var newData = this.state.data;
                    newData.unshift(blockData);
                    while (newData.length > this.props.history) {
                        newData.pop();
                    }
                    this.setState({ data: newData });
                }
            }
        };

        ws.onopen = () => {
            ws.send(
                `{"jsonrpc": "2.0", "method": "subscribe", "params": {"query": "tm.event='NewBlock'" }, "id": "ixo-explorer"}`
            );
        };
    }

    parseEvent(event: any) {
        const obj = JSON.parse(event.data);

        if (obj.result.data) {
            var block = obj.result.data.data.block;
            var blockHash = block.last_commit.blockID.hash;
            var height = block.header.height;
            var timestamp = block.header.time;
            var txCount = block.header.num_txs;
            var txData = block.data.txs.map((item: any) => {
                var decoded = base64.decode(item);
                if (decoded.length > 8) {
                    decoded = decoded.substring(4, decoded.length - 4);
                }
                return decoded;
            });

            return {
                blockHash: blockHash,
                height: height,
                timstamp: timestamp,
                txCount: txCount,
                txData: txData,
                blockData: block
            };
        }

        return {};
    }

    onChangeChainUri(event: any) {
        if (event && event.target) {
            this.setState({chainUri: (event.target.value || '')});
        }
    }

    togglePause() {
        if (this.state.paused) {
            this.setState({ paused: false, data: [] });
        } else {
            this.setState({ paused: true });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ chainUri: e.target.chainUri.value });
        this.subscribeToChain(e.target.chainUri.value);
    }

    renderTable() {
        return (
            <table className="table table-bordered table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Height</th>
                        <th scope="col">Block Hash</th>
                        <th scope="col">When</th>
                        <th scope="col">Txn Count</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((item: any, i: any) => {
                        return (<tr key={i}>
                            <td>{item.height}</td>
                            <td><Link to={{ pathname: `/block/${item.blockHash}`, state: item }}>{item.blockHash}</Link></td>
                            <td>{moment(item.timestamp).fromNow()}</td>
                            <td><Link to={{ pathname: `/transaction/${item.blockHash}`, state: item }}>{item.txCount}</Link></td>
                        </tr>);
                    })
                    }
                </tbody>
            </table>
        );
    }

    showBlockHeight() {
        var conn = new Connection(this.state.chainUri);
        conn.getLastBlock().then((block: any) => {
                this.setState({lastBlockHeight: block.header.height});
              })
              .catch(error => {
                console.log(error);
                return '';
              });
    }

    startSync() {
        var conn = new Connection(this.state.chainUri);
        var blockQueue = new BlockQueue( conn, 29000);
        this.setState({blockQueue: blockQueue});
        blockQueue.onBlock( (event: NewBlockEvent) => {
            console.log(event.getBlockHeight());
            this.setState({syncBlock: event.getBlockHeight()});
        });
        blockQueue.start();
    }

    stopSync() {
        if (this.state.blockQueue) {
          this.state.blockQueue.stop();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>Explorer</h3>
                </div>
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="chainUri"
                            value={this.state.chainUri}
                            className="form-control"
                            placeholder="Chain IP and PORT"
                            onChange={(event) => this.onChangeChainUri(event)}
                        />
                        <button style={styles.button} className="btn btn-primary btn-sm" type="submit">connect</button>
                        <button type="button" style={styles.button} className="btn btn-primary btn-sm" onClick={() => this.togglePause()}>
                            {(this.state.paused ? 'Paused' : 'Pause')}
                        </button>
                        <button type="button" style={styles.button} className="btn btn-primary btn-sm" onClick={() => this.showBlockHeight()}>
                            Block Height
                        </button>
                        <button type="button" style={styles.button} className="btn btn-primary btn-sm" onClick={() => this.startSync()}>
                            Start Sync
                        </button>
                        <button type="button" style={styles.button} className="btn btn-primary btn-sm" onClick={() => this.stopSync()}>
                            Stop Sync
                        </button>
                        <div>Last Block: {this.state.lastBlockHeight}  SyncBlock: {this.state.syncBlock}</div>
                    </div>
                </form>

                <div className="row">
                    <button type="button" style={styles.button} className="btn btn-primary btn-sm" onClick={() => this.togglePause()}>
                        {(this.state.paused ? 'Paused' : 'Pause')}
                    </button>
                </div>

                <div className="row">
                    {this.renderTable()}
                </div>
            </div>
        );
    }
}

export default Explorer;