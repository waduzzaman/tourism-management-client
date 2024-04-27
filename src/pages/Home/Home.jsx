import { useRef } from "react"; // Import useRef hook
import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel/Carousel";



const Home = () => {
  const propertiesRef = useRef(null);  
  const scrollToProperties = () => {
    propertiesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-black">
      <Helmet>
        <title>Dream Home | Home</title>
      </Helmet>

      <section className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Find Your Dream Home</h2>
          <p className="text-lg mb-8">Explore our wide range of properties and start your journey towards homeownership today.</p>
         
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300" onClick={scrollToProperties}>
            View Properties
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <Carousel />
        </div>
      </section>

  



     
    </div>
  );
};

export default Home;