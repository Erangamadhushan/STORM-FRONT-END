import React, { useState, useCallback, useEffect } from 'react';
import { FilterItems } from '../components/BuyItem/FilterItems';
import { fetchWatches } from '../services/api';
import { useNavigate } from 'react-router-dom';


export const BuyWatches = () => {
    const [watches, setWatches] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

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

    const buyProduct = (modelNumber) => {
        //alert(`You have purchased the watch with model number: ${modelNumber}`);
        navigate(`/purchase-watch/${modelNumber}`);
    }

    return (
        <div>
            <main className="bg-black text-white min-h-screen p-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Buy Watches</h1>
                <div className="grid grid-cols-1 xl:grid-cols-8 md:grid-cols-3 gap-8">
                    <div className="xl:col-span-2 md:col-span-1 mb-6">

                        <FilterItems filterByType={filterByType} />

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
                                        <button className="bg-lime-500 text-black px-4 py-2 rounded hover:bg-lime-600 transition-colors duration-300" onClick={() => buyProduct(watch.modelNumber)}>
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
