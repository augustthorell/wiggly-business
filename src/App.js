import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './css/App.css'
import Nav from './components/Nav'

import About from './pages/about'
import Users from './pages/users'
import Admin from './pages/admin'



function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/admin" component={Admin} />
          </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  
  <div className="divMargin">
    <h1>Home page</h1>
    <p>This is a test page to learn react</p>
  </div>
)


export default App;
