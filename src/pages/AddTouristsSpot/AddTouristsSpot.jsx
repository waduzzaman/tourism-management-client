import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from 'sweetalert2';

const AddTouristsSpot = () => {

    const {user} = useContext(AuthContext) ||{};

    const handleAddTouristsSpot = event => {
        event.preventDefault();
        
        // this email from the loggin user email
        const email=user.email;        
        const form = event.target;
        const name = form.name.value;
        const userEmail = form.email.value; 
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = Number(form.average_cost.value) || 0;
        const seasonality = form.seasonality.value;
        const travel_duration = Number(form.travel_duration.value) || 0;
        const total_visitors_per_year = Number(form.total_visitors_per_year.value) || 0;

        const newTouristsSpot = { name, userEmail,email, image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_duration, total_visitors_per_year };

        console.log(newTouristsSpot);

        // Send data to the server
        fetch('https://tourism-management-server-sable.vercel.app/spots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTouristsSpot)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        });
    };

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl font-extrabold text-center text-black mb-5">Add A Tourists Spot</h2>
            <form onSubmit={handleAddTouristsSpot}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">User Name</span>
                        </label>
                        <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">User Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Tourists Spot Name</span>
                        </label>
                        <input type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Country Name</span>
                        </label>
                        <input type="text" name="country_name" placeholder="Country Name" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Short Description</span>
                        </label>
                        <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Average Cost</span>
                        </label>
                        <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Best Season</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="Best Season" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Travel Duration</span>
                        </label>
                        <input type="text" name="travel_duration" placeholder="Travel Duration" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="total_visitors_per_year" placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                    </div>
                </div>
                <input type="submit" value="Add Tourists Spot" className="btn btn-block text-lg" />
            </form>
        </div>
    );
};

export default AddTouristsSpot;
