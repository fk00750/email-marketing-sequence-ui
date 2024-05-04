Act as an expert frontend developer, well versed in react and tailwindcss. I am creating a email marketing sequence website.

- Here is the updated code
- Create a card with Add new button
- Create a mock card

function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black">
                <div className="container mx-auto py-12">
                    <h1 className="text-3xl font-semibold text-white mb-6">Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Dashboard Cards or Sections */}
                        <div className="bg-white shadow rounded-lg p-6">
                            {/* Content for Dashboard Card 1 */}
                            <h2 className="text-xl font-semibold text-black mb-4">Card 1</h2>
                            <p className="text-blac">Content for Card 1 goes here.</p>
                        </div>
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

