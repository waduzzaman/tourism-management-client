import { Helmet } from "react-helmet-async";

const Blogs = () => {
  // Sample blog data (you can replace it with your actual blog data)
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for First-Time Home Buyers",
      image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1713070114~exp=1713073714~hmac=c4c7a121df2129e54c8a9942046727858abb15ae96981bca713cceb3bc77b0a1&w=1380",
      summary: "Are you embarking on the journey of buying your first home? It's an exciting milestone, but it can also be daunting if you're not sure where to start. In this blog post, we'll share 10 invaluable tips to help first-time home buyers navigate the process with confidence. From understanding your budget and securing financing to researching neighborhoods and working with real estate agents, we'll cover everything you need to know to make informed decisions and find the perfect home for you. Whether you're a young professional, a growing family, or an empty nester, these tips will empower you to make your dream of homeownership a reality.",
    },
    {
      id: 2,
      title: "How to Stage Your Home for a Quick Sale",
      image: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?t=st=1713070134~exp=1713073734~hmac=230ccd8f5810302ad4c5dfedb76d3d815d2b0f00259503fd7bf917f0503886f9&w=1380",
      summary: "Selling your home can be a stressful and time-consuming process, but staging your home effectively can make all the difference. In this comprehensive guide, we'll walk you through the steps to stage your home for a quick and profitable sale. From decluttering and depersonalizing to highlighting your home's best features and creating inviting spaces, we'll share expert tips and tricks to maximize your home's appeal to potential buyers. Whether you're preparing for an open house or listing your home online, these staging strategies will help you showcase your home in its best light and attract the right buyers. Get ready to sell your home faster and for top dollar!",
    },
    {
      id: 3,
      title: "The Benefits of Living in a Gated Community",
      image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1713070150~exp=1713073750~hmac=d91a355fb2d1757565ef6347fc4bfe97a80fb352de312966c4e1609870657431&w=1380",
      summary: "Gated communities offer a unique living experience with a range of benefits that appeal to homeowners seeking security, privacy, and a sense of community. In this blog post, we'll explore the advantages of living in a gated community, from enhanced safety measures and controlled access to exclusive amenities and a tight-knit community atmosphere. Whether you're looking for a peaceful retreat away from the hustle and bustle of city life or a family-friendly neighborhood with recreational facilities and social events, gated communities offer something for everyone. Discover why more and more homeowners are choosing gated living and why it might be the perfect fit for you.",
    },
  ];

  return (
    <div className="min-h-screen  py-8 px-4">
      <Helmet>
        <title>Dream Home | Blog</title>
      </Helmet>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
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