import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import Explore from './pages/Explore';

/* Components */
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/explore" component={Explore} />
      </div>
    </Router>
  );
}

export default App;
