import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons'; // Changed icon to faPlane for travel-related testimonials

const Testimonials = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []); 

    const testimonials = [
        {
            id: 1,
            quote: "I had an amazing experience exploring the Grand Canyon with Travel Ease. Everything was well-organized and the guides were knowledgeable.",
            author: "John Doe",
            ratings:"",
        },
        {
            id: 2,
            quote: "Travel Ease helped me plan the perfect vacation to Banff National Park. The trip exceeded my expectations in every way!",
            author: "Jane Smith",
            ratings:"",
        },
        {
            id: 3,
            quote: "My journey to Machu Picchu with Travel Ease was unforgettable. The trip was expertly planned and the sights were breathtaking.",
            author: "Ayaana",
            ratings:"",
        },
      
    ];
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-2">
                <h2 className="text-3xl font-semibold text-center mb-6">Traveler Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                    {testimonials.map(testimonial => (
                        <div
                            key={testimonial.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden p-5"
                            data-aos="fade-up" // AOS animation attribute
                        >
                            <p className="text-gray-700">{testimonial.quote}</p>
                            <div className="flex items-center mt-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4">
                                    <FontAwesomeIcon icon={faPlane} size="lg" /> {/* Changed icon to plane */}
                                </div>
                                <div>
                                    <p className="font-semibold">{testimonial.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
