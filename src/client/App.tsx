import * as React from 'react';
import Header from './components/Header';
import Explorer from './components/Explorer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactJson from 'react-json-view';

const Home = () => {
  return (
    <Explorer history="20" />
  );
};

const Block = (props: any) => {
  debugger;
  var json = props.location.state.blockData;
  return (
    <div>
      <h1>Block</h1>
      <ReactJson src={json} theme="monokai" />
    </div>
  );
};

const Transaction = (props: any) => {
  var json = props.location.state.txData;
  return (
    <div>
      <h1>Transaction</h1>
      <ReactJson src={json} theme="monokai" />
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/block/:blockId" component={Block} />
            <Route exact={true} path="/transaction/:transactionData" component={Transaction} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
