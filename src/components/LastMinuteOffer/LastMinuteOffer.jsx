
// const LastMinuteOffer = () => {
//     return (
//         <section className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-20">
//             <div className="container mx-auto flex items-center justify-center">
//                 <img
//                     src="https://cdn.pixabay.com/photo/2017/05/26/05/38/discount-2345221_960_720.png"
//                     alt="Last Minute Offer"
//                     className="w-96 h-auto mr-8 rounded-lg shadow-md object-cover"
//                 />
//                 <div>
//                     <h2 className="text-4xl font-bold mb-4">Last Minute Offer</h2>
//                     <p className="text-lg mb-4">
//                         Do not miss our exclusive last-minute offer! Book now and save big on your next getaway.
//                     </p>
//                     <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
//                         Book Now
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default LastMinuteOffer;


const LastMinuteOffer = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1141976437/photo/illuminated-niagara-falls-at-night-canada-north-america.jpg?s=612x612&w=0&k=20&c=qgEDAGEUTvBb5nx-wwLokqKteZnyI3s4pCVKyQC8wpI=)' }}>
            <div className="container mx-auto flex items-center justify-center">
                <img
                    src="https://cdn.pixabay.com/photo/2017/05/26/05/38/discount-2345221_960_720.png"
                    alt="Last Minute Offer"
                    className="w-96 h-auto mr-8 rounded-lg shadow-md object-cover"
                />
                <div className="text-white">
                    <h2 className="text-4xl font-bold mb-4">Last Minute Offer</h2>
                    <p className="text-lg mb-4">
                        Do not miss our exclusive last-minute offer! Book now and save big on your next getaway.
                    </p>
                    <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LastMinuteOffer;

