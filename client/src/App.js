import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';

/* Components */
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="nav-gap"></div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog/:id" component={BlogPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
