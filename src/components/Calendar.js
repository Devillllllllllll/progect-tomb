import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext, AuthProvider } from './Auth'
import firebaseConfig from '../config'
import './tailwind.css'
import Navbars from './Navbars'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const Calendar = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (

        <>
            {/* Navbars */}
            <AuthProvider><Router><Switch><Route path="/calendar" exact><Navbars/></Route></Switch></Router></AuthProvider>

            <div className="container mt-5">
                <h1>Welcome Calendar !!!!!</h1>
                <p>This is the dashboard, if you can see this you're logged in.</p>
                <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button>
            </div>

            {/* tailwind */}
           
        </>
    )
}

export default Calendar;