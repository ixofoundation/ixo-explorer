import axios, { AxiosPromise } from 'axios';

export class Connection {
  THRESHHOLD_FOR_WEBSOCKET = 10;
  chainUri: string;

  constructor(chainUri: string) {
    this.chainUri = chainUri;
  }

  getBlock(height: number): AxiosPromise {
    var url = 'http://' + this.chainUri + '/block?height=';
    if (height > 0) {
      url = url + height;
    }

    return axios
      .get(url)
      .then(response => {
        if (response.data.result) {
          return response.data.result.block;
        } else {
          throw new Error('No more blocks');
        }
      })
      .catch(error => {
        return '';
      });
  }

  getLastBlock() {
    return this.getBlock(-1);
  }

  getLastBlockHeight(): AxiosPromise {
    return this.getLastBlock().then((block: any) => {
        return block.header.height;
    })
    .catch(error => {
        console.log(error);
        return -1;
    });
    
  }
  subscribeToChain(callback: Function) {
    var ws = new WebSocket('ws://' + this.chainUri + '/websocket');
    ws.onmessage = event => {
      callback(JSON.parse(event.data.result.block));
    };

    ws.onopen = () => {
      ws.send(
        `{"jsonrpc": "2.0", "method": "subscribe", "params": {"query": "tm.event='NewBlock'" }, "id": "ixo-explorer"}`
      );
    };
  }
}
