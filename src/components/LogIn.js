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
            <div className="container mt-5">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>

            {/* add tailwind */}
            <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div class="w-full sm:max-w-md p-5 mx-auto">
                    <h2 class="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
                    <form>
                    <div class="mb-4">
                        <label class="block mb-1" for="email">Email-Address</label>
                        <input id="email" type="text" name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                    </div>
                    <div class="mb-4">
                        <label class="block mb-1" for="password">Password</label>
                        <input id="password" type="password" name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                    </div>
                    <div class="mt-6 flex items-center justify-between">
                        <div class="flex items-center">
                        <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                        <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
                        </div>
                        <a href="#" class="text-sm"> Forgot your password? </a>
                    </div>
                    <div class="mt-6">
                        <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
                    </div>
                    <div class="mt-6 text-center">
                        <a href="#" class="underline">Sign up for an account</a>
                    </div>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default LogIn;