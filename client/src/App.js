import './App.css';
import logo from './spacex.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Launches from './components/launches';
import Launch  from './components/launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="container">
        <img src={logo} alt={'SpaceX'} style={{ width: 300, display: 'block', margin: 'auto' }} />
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:id" component={Launch} />
      </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
