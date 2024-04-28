import { useState, useEffect } from 'react';

const Spots = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/spots')
            .then(response => response.json())
            .then(data => setSpots(data))
            .catch(error => console.error('Error fetching spots:', error));
    }, []);

    return (
        <div className="container mx-auto p-2">
            <h1 className="text-3xl font-bold mb-8 text-center">Tourist Spots</h1>
            <div className="grid grid-cols-3 gap-8 p-4 ">
                {spots.map(spot => (
                    <div key={spot._id} className="border-2 p-5  border-slate-800 bg-slate-100 drop-shadow-2xl rounded-lg ">
                        <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                        <h2 className="text-xl font-semibold mb-2">{spot.tourists_spot_name}</h2>
                        <p className="text-gray-600 mb-2">{spot.country_name}</p>
                        <p className="text-gray-600 mb-4">{spot.short_description}</p>
                        <p className="text-gray-600 mb-2">Average Cost: ${spot.average_cost}</p>
                        <p className="text-gray-600 mb-2">Seasonality: {spot.seasonality}</p>
                        <p className="text-gray-600 mb-2">Travel Duration: {spot.travel_duration} days</p>
                        <p className="text-gray-600">Total Visitors Per Year: {spot.total_visitors_per_year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Spots;
