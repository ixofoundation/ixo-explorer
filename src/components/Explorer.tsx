import * as React from 'react';
import { Link } from 'react-router-dom';

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
        marginBottom: '5px'
    }
};

export interface Props {
    history: string;
}
export interface State {
    data: any;
    ws: WebSocket;
    paused: boolean;
}

class Explorer extends React.Component<Props, State> {

    constructor(props?: any, context?: any) {
        super(props, context);
        this.state = {
            data: [],
            ws: new WebSocket('NODE_URI'),
            paused: false
        };
    }

    componentWillMount() {
        this.setState({ data: [], paused: false });
        this.state.ws.onmessage = event => {
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

        this.state.ws.onopen = () => {
            this.state.ws.send(
                `{"jsonrpc": "2.0", "method": "subscribe", "params": {"query": "tm.event='NewBlock'" }, "id": "ixo-explorer"}`
            );
        };
    }

    componentWillUnmount() {
        this.setState({ paused: true });
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

    togglePause() {
        if (this.state.paused) {
            this.setState({ paused: false, data: [] });
        } else {
            this.setState({ paused: true });
        }
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>Explorer</h3>
                </div>
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