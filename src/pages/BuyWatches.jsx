import React, { useState, useCallback, useEffect } from 'react';
import { fetchWatches } from '../api/api'


export const BuyWatches = () => {
    const [watches, setWatches] = useState([]);
    const [loading, setLoading] = useState(true);

    const getWatches = useCallback(async () => {
        try {
            setLoading(true);
            const data = await fetchWatches();
            setWatches(data);
            console.log('Fetched watches:', data);
        } catch (error) {
            console.error('Failed to fetch watches:', error);
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array means it won't change
    
    useEffect(() => {
        getWatches();
    }, [getWatches]);
    const filterByType = async (type) => {
        if (type === 'All') {
            await getWatches();
            return;
        }
        if (type !== 'All') {
            const allWatches = await fetchWatches();
            const filteredWatches = allWatches.filter(watch => watch.type === type);
            setWatches(filteredWatches);
            return;
        }
        
    }

    return (
        <div>
            <main className="bg-black text-white min-h-screen p-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Buy Watches</h1>
                <div className="grid grid-cols-1 xl:grid-cols-8 md:grid-cols-3 gap-8">
                    <div className="xl:col-span-2 md:col-span-1 mb-6">
                        <div className="border border-gray-700 rounded-lg p-4 sticky top-20">
                            <h2 className="text-xl font-semibold mb-4">Filter by Type</h2>
                            <ul className="space-y-2">
                                <li><button onClick={() => filterByType('All')}  className="w-full text-left hover:underline">All</button></li>
                                <li><button onClick={() => filterByType('dive watch')} className="w-full text-left hover:underline">Dive Watch</button></li>
                                <li><button onClick={() => filterByType('chronograph')} className="w-full text-left hover:underline">Chronograph</button></li>
                                <li><button onClick={() => filterByType('racing chronograph')} className="w-full text-left hover:underline">Racing Chronograph</button></li>
                                <li><button onClick={() => filterByType('dress watch')} className="w-full text-left hover:underline">Dress Watch</button></li>
                                <li><button onClick={() => filterByType('eco-drive')} className="w-full text-left hover:underline">Eco-Drive</button></li>
                                <li><button onClick={() => filterByType('aviation chronograph')} className="w-full text-left hover:underline">Aviation Chronograph</button></li>
                                <li><button onClick={() => filterByType('digital sport')} className="w-full text-left hover:underline">Digital Sport</button></li>
                                <li><button onClick={() => filterByType('casual watch')} className="w-full text-left hover:underline">Casual Watch</button></li>
                                <li><button onClick={() => filterByType('automatic')} className="w-full text-left hover:underline">Automatic</button></li>
                                <li><button onClick={() => filterByType('fashion watch')} className="w-full text-left hover:underline">Fashion Watch</button></li>
                                <li><button onClick={() => filterByType('field watch')} className="w-full text-left hover:underline">Field Watch</button></li>
                                <li><button onClick={() => filterByType('automatic dress')} className="w-full text-left hover:underline">Automatic Dress</button></li>

                            </ul>
                        </div>
                    </div>
                    <div className="xl:col-span-6 md:col-span-2">
                        {loading ? (
                            <p>Loading watches...</p>
                        ) : (
                            <div className="grid w-full max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {watches.map((watch) => (
                                    <div key={watch._id} className="border border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                                        <img src={watch.imageURL} alt={watch.modelNumber} className="w-full h-48 object-cover mb-4 rounded-lg"/>
                                        <h2 className="text-xl font-semibold mb-2">{watch.modelNumber}</h2>
                                        <p className="text-lime-500 mb-4">${watch.price}</p>
                                        <p className="mb-4">{watch.type}</p>
                                        <button className="bg-lime-500 text-black px-4 py-2 rounded hover:bg-lime-600 transition-colors duration-300">
                                            Buy Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
