import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Team from './components/Team'
import Projects from './components/Projects'
import Calendar from './components/Calendar'
import Navbars from './components/Navbars'
import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/navbars" component={Navbars} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/calendar" component={Calendar} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
