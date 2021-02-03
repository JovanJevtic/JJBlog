import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import NewPage from './pages/NewBlog';

/* Components */
import Nav from './components/Nav';

import './styling/style.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="header-gap"></div>
        <div className="content">
          <div className="left-nav">

          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog/:id" component={BlogPage} />
            <Route path="/new" component={NewPage} />
          </Switch>
          <div className="right-nav">

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
