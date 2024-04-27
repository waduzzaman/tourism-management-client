import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Grand Canyon: A Natural Wonder of the United States",
      image: "https://images.unsplash.com/photo-1591823600156-25dfdce98423?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      summary: "Discover the awe-inspiring beauty of the Grand Canyon, one of the most iconic landmarks in the United States. From hiking along its rim to rafting down the Colorado River, explore the diverse landscapes and rich history of this UNESCO World Heritage Site.",
    },
    {
      id: 2,
      title: "Discovering Banff National Park: Canada's Outdoor Playground",
      image: "https://images.unsplash.com/photo-1561134643-668f9057cce4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      summary: "Experience the breathtaking beauty of Banff National Park, Canada's oldest national park and a UNESCO World Heritage Site. From hiking in the Rocky Mountains to soaking in hot springs, discover the endless outdoor adventures awaiting you in this pristine wilderness.",
    },
    {
      id: 3,
      title: "Exploring the Amazon Rainforest: Brazil's Biodiversity Hotspot",
      image: "https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      summary: "Embark on an unforgettable journey into the heart of the Amazon Rainforest, the largest and most biodiverse tropical rainforest in the world. From wildlife spotting to jungle treks, immerse yourself in the natural wonders of Brazil's most iconic landscape.",
    },
    {
      id: 4,
      title: "Discovering Patagonia: Argentina's Land of Fire and Ice",
      image: "https://plus.unsplash.com/premium_photo-1694475026771-800aeecc6115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      summary: "Explore the rugged beauty of Patagonia, a vast and remote region at the southern tip of Argentina. From trekking in the Andes to marveling at glaciers, discover the dramatic landscapes and pristine wilderness of this adventurer's paradise.",
    },
    {
      id: 5,
      title: "Discovering the Mayan Ruins of Chichen Itza: Mexico's Ancient Wonder",
      image: "https://images.unsplash.com/photo-1561577101-aa749bffbb70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      summary: "Step back in time and explore the ancient Mayan ruins of Chichen Itza, one of Mexico's most famous archaeological sites. From marveling at the towering pyramids to learning about Mayan culture, discover the mysteries of this UNESCO World Heritage Site.",
    },
    {
      id: 6,
      title: "Exploring Machu Picchu: Peru's Lost City of the Incas",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      summary: "Journey to the mountaintop citadel of Machu Picchu and uncover the secrets of Peru's ancient Inca civilization. From hiking the Inca Trail to witnessing the sunrise over the Sacred Valley, experience the magic and mystique of one of the New Seven Wonders of the World.",
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <Helmet>
        <title>Travel | Blog</title>
      </Helmet>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore the World Through Our Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
