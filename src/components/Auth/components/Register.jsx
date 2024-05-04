import React, { useState } from 'react';
import Navbar from '../../Home/components/Navbar';
import Footer from '../../Home/components/Footer';
import { register } from '../../../api/api_functions';
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if email is valid
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            clearErrorMessage();
            return;
        }

        // Check if password meets requirements
        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            clearErrorMessage();
            return;
        }

        // Check if confirm password matches password
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            clearErrorMessage();
            return;
        }

        // Clear error message
        setErrorMessage('');

        // Your registration logic here
        console.log('Registration submitted:', { email, password });

        try {
            // Call the register function from api_functions.js
            const response = await register(email, password);
            console.log('User registered successfully:', response);
            // Optionally, you can redirect the user to another page upon successful registration
            navigate("/login");
        } catch (error) {
            console.error('Registration failed:', error);
            setErrorMessage(error.response.data.message);
            clearErrorMessage();
            // Handle error (e.g., display an error message to the user)
        }
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    // Function to clear error message after some time
    const clearErrorMessage = () => {
        setTimeout(() => {
            setErrorMessage('');
        }, 3000); // Set timeout duration in milliseconds (e.g., 3000 ms = 3 seconds)
    };

    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-black'>
                <section>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
                            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                            BuildEmail
                        </a>
                        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                    Create an account
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" required />
                                    </div>
                                    <div>
                                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                                        <input type="password" name="confirm-password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" required />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-primary-300 bg-gray-700  focus:ring-primary-600 ring-offset-gray-800" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline text-primary-500" href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                                    <p className="text-sm font-light text-gray-400">
                                        Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline">Login here</Link>
                                    </p>
                                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Register;
