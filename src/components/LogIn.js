import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import './tailwind.css'

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <>

            {/* add tailwind */}
                <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                    <div class="w-full sm:max-w-md p-5 mx-auto">
                        <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
                        <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1" for="exampleInputEmail1">Email-Address</label>
                            <input id="exampleInputEmail1" type="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email" className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1" for="exampleInputPassword1">Password</label>
                            <input id="exampleInputPassword1" type="password" name="password" placeholder="Enter your password" className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>

        </>
    )
}

export default LogIn;