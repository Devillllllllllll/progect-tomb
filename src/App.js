import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Navbars from './components/Navbars'
import { AuthProvider } from './components/Auth'
import Editdata from './components/Editdata'
import Inputdata from './components/Inputdata'

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
          <Route exact path="/editdata" component={Editdata} />
          <Route exact path="/inputdata" component={Inputdata} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
