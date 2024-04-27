import { Link } from 'react-router-dom';

const Spots = () => {
    // Sample data for spots
    const spots = [
        {
            id: 1,
            title: 'Statue of Liberty',
            country: 'United States of America',
            image: 'https://media.istockphoto.com/id/525232662/photo/new-york-empire-state-building-and-statue-of-liberty.jpg?s=612x612&w=0&k=20&c=Ms_4rncOiyHJcXmLdFHw0RSBjbPhwvhz2gGJ4tEI25I=',
        },
        {
            id: 2,
            title: 'Niagara Falls',
            country: 'Canada',
            image: 'https://media.istockphoto.com/id/1346270784/photo/niagara-falls-horseshoe-falls.jpg?s=612x612&w=0&k=20&c=ra4FaCjLDTMjatCIOTCJP-ilDr0amtzMgI8aAjyf3qU=',
        },
        {
            id: 3,
            title: 'Christ the Redeemer',
            country: 'Brazil',
            image: 'https://media.istockphoto.com/id/1312539295/photo/aerial-view-of-sanctuary-of-christ-the-king-or-santuario-de-cristo-rei-on-sunny-summer-day.jpg?s=612x612&w=0&k=20&c=ecV7Z6Y1hykxPq_gLy9WrkSdpet26hartKGHUAyxQzI=',
        },
        {
            id: 4,
            title: 'Iguazu Falls',
            country: 'Argentina',
            image: 'https://media.istockphoto.com/id/488388458/photo/tourists-at-iguazu-falls-foz-do-iguacu-brazil.jpg?s=612x612&w=0&k=20&c=frw5k9SXBn5vVfc7GQe5QqbWO5RXegF-4gpqrDFknFg=',
        },
        {
            id: 5,
            title: 'Chichen Itza',
            country: 'Mexico',
            image: 'https://media.istockphoto.com/id/481272289/photo/el-castillo-of-chichen-itza-at-sunset-mexico.jpg?s=612x612&w=0&k=20&c=vp5jlz0SdiCl4ow_xRUPDgZ-09TdRdWuzE4NW7v130c=',
        },
        {
            id: 6,
            title: 'Machu Picchu',
            country: 'Peru',
            image: 'https://media.istockphoto.com/id/930824730/sv/foto/machu-picchu-peru.jpg?s=612x612&w=0&k=20&c=xwbFDC1ij4Eydd0izHZYOU_-0mRr0gDg-4-4fL9V9y8=',
        },
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-3xl font-semibold text-center mb-6">Explore Top Spots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {spots.map(spot => (
                    <Link key={spot.id} to={`/spots/${spot.id}`} className="group">
                        <div className="overflow-hidden bg-white rounded-lg shadow-md group-hover:shadow-lg transition duration-300">
                            <img src={spot.image} alt={spot.title} className="w-full h-64 object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold mb-2">{spot.title}</h3>
                                <p className="text-gray-600">{spot.country}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Spots;
