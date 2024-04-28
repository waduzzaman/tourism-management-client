import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faDollarSign,
  faRuler,
  faHome,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const ViewDetails = () => {
  const [spot, setSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Corrected parameter name to id

  useEffect(() => {
    const fetchSpot = async () => {
      try {
        const response = await fetch(`http://localhost:5000/spots/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch spot details");
        }
        const data = await response.json();
        setSpot(data);
      } catch (error) {
        console.error("Error fetching spot details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpot();
  }, [id]); // Include id in the dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!spot) {
    return <div>Error loading spot details</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Tourism Management | Spot Details</title>
      </Helmet>
      <div className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Spot Details</h1>
        <p className="text-lg">Explore the details of your favorite spot</p>
      </div>
      <div className="container mx-auto mt-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={spot.image}
            alt={spot.tourists_spot_name}
            className="w-full"
          />
          <div className="p-4 mx-10">
            <h2 className="text-xl font-semibold">{spot.tourists_spot_name}</h2>
            <p className="text-gray-600">{spot.short_description}</p>
            <div className="flex flex-wrap mt-4">
              <InfoCard
                icon={faMapMarkerAlt}
                title="Location"
                description={spot.location}
              />
              <InfoCard
                icon={faDollarSign}
                title="Average Cost"
                description={`$${spot.average_cost}`}
              />
              <InfoCard
                icon={faRuler}
                title="Travel Duration"
                description={`${spot.travel_duration} days`}
              />
              <InfoCard
                icon={faCheck}
                title="Seasonality"
                description={spot.seasonality}
              />
              <InfoCard
                icon={faHome}
                title="Country Name"
                description={spot.country_name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, description }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-500 text-white rounded-full">
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

InfoCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ViewDetails;
