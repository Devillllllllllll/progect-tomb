import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import Navbars from './Navbars'
import './tailwind.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './Auth'


const Home = () => {
    const { currentUser } = useContext(AuthContext);


    return (
        <>
            {/* Navbars */}
            <AuthProvider><Router><Switch><Route path="/" exact><Navbars/></Route></Switch></Router></AuthProvider>

            <div className="container mt-5">
                <h2 class="mb-12 text-center text-5xl font-extrabold">Home Tomb ฌาปนสถาน ธม.</h2>
                {currentUser ? (
                    <p>You are logged in - <Link to="/dashboard">View Dashboard</Link></p>
                ) : (
                    <p>
                        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Log In</Link> or 
                        <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Sign Up</Link>
                    </p>
                )}
            </div>


        </>
    )
}

export default Home;