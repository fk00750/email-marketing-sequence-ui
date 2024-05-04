import React, { useState } from 'react';

import { login } from '../../../api/api_functions';
import Navbar from '../../Home/components/Navbar';
import Footer from '../../Home/components/Footer';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check email format
        if (!validateEmail(email)) {
            setError(true);
            setErrorMessage('Invalid email format');
            clearErrorMessage();
            return;
        }

        // Check password length
        if (password.length < 6) {
            setError(true);
            setErrorMessage('Password must be at least 6 characters long');
            clearErrorMessage();
            return;
        }

        try {
            const response = await login(email, password);
            console.log('User logged in successfully:', response);
            // Optionally, you can redirect the user to another page upon successful login
        } catch (error) {
            console.error('Login failed:', error);
            setError(true);
            setErrorMessage('Invalid email or password. Please try again.');
            clearErrorMessage();
        }
    };

    return (
        <>
            {/* Navbar component */}
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
                                    Log In to Your Account
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
                                    <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Log In</button>
                                    {error && <p className="text-sm font-light text-red-500">{errorMessage}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Footer component */}
            <Footer />
        </>
    );
}

export default Login;
