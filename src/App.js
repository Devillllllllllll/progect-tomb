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
import Footer from './components/Footer'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/navbars" component={Navbars} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/editdata" component={Editdata} />
          <Route path="/inputdata" component={Inputdata} />
          <Route path="/footer" component={Footer} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
