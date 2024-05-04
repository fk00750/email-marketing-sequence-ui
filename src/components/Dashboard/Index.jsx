import React from 'react';
import Navbar from '../Home/components/Navbar';
import Footer from '../Home/components/Footer';

function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black">
                <div className="container mx-auto py-12">
                    <h1 className="text-3xl font-semibold text-white mb-6">Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Add New Card */}
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-center items-center">
                            <button className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg mb-4">Add New</button>
                        </div>
                        {/* Mock Card */}
                        <div className="bg-white shadow rounded-lg p-6">
                            {/* Content for Mock Card */}
                            <h2 className="text-xl font-semibold text-black mb-4">Card Title</h2>
                            <p className="text-black">Content for the card goes here.</p>
                        </div>
                        {/* Other Dashboard Cards */}
                        <div className="bg-white shadow rounded-lg p-6">
                            {/* Content for Dashboard Card 2 */}
                            <h2 className="text-xl font-semibold text-black mb-4">Card 2</h2>
                            <p className="text-black">Content for Card 2 goes here.</p>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6">
                            {/* Content for Dashboard Card 3 */}
                            <h2 className="text-xl font-semibold text-black mb-4">Card 3</h2>
                            <p className="text-black">Content for Card 3 goes here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
