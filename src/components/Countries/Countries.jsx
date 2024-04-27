// import { Link } from 'react-router-dom';

// const Countries = () => {
//     // Sample data for countries
//     const countries = [
//         {
//             id: 1,
//             name: 'United States of America',
//             spots: [
//                 {
//                     id: 1,
//                     title: 'Statue of Liberty',
//                     image: 'https://media.istockphoto.com/id/525232662/photo/new-york-empire-state-building-and-statue-of-liberty.jpg?s=612x612&w=0&k=20&c=Ms_4rncOiyHJcXmLdFHw0RSBjbPhwvhz2gGJ4tEI25I=',
//                 },
//                 {
//                     id: 2,
//                     title: 'Grand Canyon',
//                     image: 'https://media.istockphoto.com/id/479823718/photo/grand-canyon-national-park-arizona-usa-picture-id479823718?b=1&k=20&m=479823718&s=170667a&w=0&h=_Wd3MwiNzEStp-_UJihYxflDzo6wjyYFZV1eg2jjRf0=',
//                 },
//                 // Add more spots for the USA
//             ]
//         },
//         {
//             id: 2,
//             name: 'Canada',
//             spots: [
//                 {
//                     id: 3,
//                     title: 'Niagara Falls',
//                     image: 'https://media.istockphoto.com/id/1346270784/photo/niagara-falls-horseshoe-falls.jpg?s=612x612&w=0&k=20&c=ra4FaCjLDTMjatCIOTCJP-ilDr0amtzMgI8aAjyf3qU=',
//                 },
//                 {
//                     id: 4,
//                     title: 'Banff National Park',
//                     image: 'https://media.istockphoto.com/id/1340713021/photo/mountain-landscape-with-emerald-lake-banff-national-park-canada-picture-id1340713021?b=1&k=20&m=1340713021&s=170667a&w=0&h=wBiTLpzhYrQ1AaR-qqYNk5RJ0vgzijcPzJuLQVf7hLw=',
//                 },
//                 // Add more spots for Canada
//             ]
//         },
//         {
//             id: 3,
//             name: 'Brazil',
//             spots: [
//                 {
//                     id: 5,
//                     title: 'Christ the Redeemer',
//                     image: 'https://media.istockphoto.com/id/1312539295/photo/aerial-view-of-sanctuary-of-christ-the-king-or-santuario-de-cristo-rei-on-sunny-summer-day.jpg?s=612x612&w=0&k=20&c=ecV7Z6Y1hykxPq_gLy9WrkSdpet26hartKGHUAyxQzI=',
//                 },
//                 {
//                     id: 6,
//                     title: 'Iguazu Falls',
//                     image: 'https://media.istockphoto.com/id/488388458/photo/tourists-at-iguazu-falls-foz-do-iguacu-brazil.jpg?s=612x612&w=0&k=20&c=frw5k9SXBn5vVfc7GQe5QqbWO5RXegF-4gpqrDFknFg=',
//                 },
//                 // Add more spots for Brazil
//             ]
//         },
//         {
//             id: 4,
//             name: 'Argentina',
//             spots: [
//                 {
//                     id: 7,
//                     title: 'Iguazu Falls',
//                     image: 'https://media.istockphoto.com/id/488388458/photo/tourists-at-iguazu-falls-foz-do-iguacu-brazil.jpg?s=612x612&w=0&k=20&c=frw5k9SXBn5vVfc7GQe5QqbWO5RXegF-4gpqrDFknFg=',
//                 },
//                 {
//                     id: 8,
//                     title: 'Perito Moreno Glacier',
//                     image: 'https://media.istockphoto.com/id/585678918/photo/the-perito-moreno-glacier-located-in-the-argentino-lake-argentina-picture-id585678918?b=1&k=20&m=585678918&s=170667a&w=0&h=JHVuOcWFvTQvvWcLOPyCixzqrb0MwXcMck-nnU2awic=',
//                 },
//                 // Add more spots for Argentina
//             ]
//         },
//         {
//             id: 5,
//             name: 'Mexico',
//             spots: [
//                 {
//                     id: 9,
//                     title: 'Chichen Itza',
//                     image: 'https://media.istockphoto.com/id/481272289/photo/el-castillo-of-chichen-itza-at-sunset-mexico.jpg?s=612x612&w=0&k=20&c=vp5jlz0SdiCl4ow_xRUPDgZ-09TdRdWuzE4NW7v130c=',
//                 },
//                 {
//                     id: 10,
//                     title: 'Teotihuacan Pyramids',
//                     image: 'https://media.istockphoto.com/id/514037016/photo/the-pyramid-of-the-sun-at-teotihuacan-mexico-city-picture-id514037016?b=1&k=20&m=514037016&s=170667a&w=0&h=fweA1nZvF4bE53KYxb3N9ccIoHq6hJVMJfK0tqBcCg8=',
//                 },
//                 // Add more spots for Mexico
//             ]
//         },
//         {
//             id: 6,
//             name: 'Peru',
//             spots: [
//                 {
//                     id: 11,
//                     title: 'Machu Picchu',
//                     image: 'https://media.istockphoto.com/id/930824730/sv/foto/machu-picchu-peru.jpg?s=612x612&w=0&k=20&c=xwbFDC1ij4Eydd0izHZYOU_-0mRr0gDg-4-4fL9V9y8=',
//                 },
//                 {
//                     id: 12,
//                     title: 'Nazca Lines',
//                     image: 'https://media.istockphoto.com/id/865816706/photo/aerial-view-of-the-nazca-lines-in-the-desert-of-nazca-peru-picture-id865816706?b=1&k=20&m=865816706&s=170667a&w=0&h=Xz-fmaqTdqbeQmP3-JzQ15z_1-OhDNopS5r2EO88FjY=',
//                 },
//                 // Add more spots for Peru
//             ]
//         },
//     ];

//     return (
//         <div className="container mx-auto py-8 px-4">
//             <h2 className="text-3xl font-semibold text-center mb-6">Explore Countries</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//                 {countries.map(country => (
//                     <Link key={country.id} to={`/countries/${country.id}`} className="group">
//                         <div className="overflow-hidden bg-white rounded-lg shadow-md group-hover:shadow-lg transition duration-300">
//                             {/* Displaying the first spot of each country */}
//                             <img src={country.spots[0].image} alt={country.name} className="w-full h-64 object-cover" />
//                             <div className="p-4 text-center">
//                                 <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
//                                 {/* You can display additional information about the country here */}
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Countries;

import { Link } from 'react-router-dom';

const Countries = () => {
    // Sample data for countries
    const countries = [
        {
            id: 1,
            name: 'United States of America',
            flag: 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg',
            spots: [
                {
                    id: 1,
                    title: 'Statue of Liberty',
                    image: 'https://media.istockphoto.com/id/525232662/photo/new-york-empire-state-building-and-statue-of-liberty.jpg?s=612x612&w=0&k=20&c=Ms_4rncOiyHJcXmLdFHw0RSBjbPhwvhz2gGJ4tEI25I=',
                },
                {
                    id: 2,
                    title: 'Grand Canyon',
                    image: 'https://media.istockphoto.com/id/479823718/photo/grand-canyon-national-park-arizona-usa-picture-id479823718?b=1&k=20&m=479823718&s=170667a&w=0&h=_Wd3MwiNzEStp-_UJihYxflDzo6wjyYFZV1eg2jjRf0=',
                },
                // Add more spots for the USA
            ]
        },
        {
            id: 2,
            name: 'Canada',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png',
            spots: [
                {
                    id: 1,
                    title: 'Toronto',
                    image: 'https://theplanetd.com/images/canada-landmarks-cn-tower-toronto.jpg',
                },
               
                // Add more spots for the USA
            ]
        },
        {
            id: 3,
            name: 'Brazil',
            flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Qk54eqDZZtCRRbyyMzDroOZFIWFwO-jTcYHGNc-PQQ&s',
            spots: [
                {
                    id: 1,
                    title: 'Sugar Loaf, Rio de Janeiro',
                    image: 'https://www.planetware.com/wpimages/2024/01/brazil-tourist-attractions-rio-de-janeiro-view-over-city.jpg',
                },
               
                // Add more spots for the USA
            ]
        },
        {
            id: 4,
            name: 'Argentina',
            flag: 'https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg',
            spots: [
                {
                    id: 1,
                    title: 'Iguazu Falls',
                    image: 'https://images.squarespace-cdn.com/content/v1/5856bc666a49634cd55b0ba9/0dbe1767-5d0b-48a9-8e86-48cae9f7142a/iguazu-falls.jpeg',
                },
               
                // Add more spots for the USA
            ]
        },
        {
            id: 5,
            name: 'Mexico',
            flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIOr1ZglZSPCoWzDVR4ZknXNUhwej52kNnR0sKa2G2Q&s',
            spots: [
                {
                    id: 1,
                    title: 'Cancun',
                    image: 'https://theplanetd.com/images/Top-Places-to-Visit-in-Mexico.jpg',
                },
               
                // Add more spots for the USA
            ]
        },
        {
            id: 5,
            name: 'Peru',
            flag: 'https://cdn.britannica.com/48/3448-050-1EFC8CF3/Flag-Peru.jpg',
            spots: [
                {
                    id: 1,
                    title: 'Machu Picchu',
                    image: 'https://www.peru.travel/Contenido/Noticia/Imagen/en/475/1.0/Principal/33.jpg',
                },
               
                // Add more spots for the USA
            ]
        },
        // Add more countries with flags and spots
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-3xl font-semibold text-center mb-6">Explore Countries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {countries.map(country => (
                    <Link key={country.id} to={`/countries/${country.id}`} className="group relative">
                        <div className="overflow-hidden bg-white rounded-lg shadow-md group-hover:shadow-lg transition duration-300">
                            <img src={country.spots[0].image} alt={country.name} className="w-full h-64 object-cover relative" />
                            {/* Flag */}
                            <img src={country.flag} alt={`${country.name} Flag`} className="absolute top-0 right-0 m-2 w-12" />
                            {/* Country Name */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-xl font-semibold bg-black bg-opacity-75 px-4 py-2 rounded-lg">{country.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Countries;

