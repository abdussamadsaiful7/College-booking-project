import React, { useState } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/animation_review.json";
import toast from 'react-hot-toast';


const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
//console.log(image_hosting_token);

const AddReview = () => {
    const [data, setData] = useState({}); // Create state to hold form data

    const handleAddReview = async (event) => {
        event.preventDefault();

        // Get the form data
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const ratings = form.ratings.value;
        const image = form.image.files[0]; // Get the image file
        const category = form.category.value;
        const message = form.message.value;

        // Upload image to ImgBB
        const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
        const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
        const formData = new FormData();
        formData.append('image', image);
        try {
            const response = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            });
            const imgBBResponse = await response.json();
            const imageUrl = imgBBResponse.data.url;
            console.log("Image URL:", imageUrl);

            // Send data to MongoDB
            const newReview = { name, email, category, ratings, message, image: imageUrl };
            console.log("New Review:", newReview);

            // Use your API URL for sending data to MongoDB
            const apiURL = "http://localhost:5070/reviews";
            const mongoResponse = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReview),
            });
            const mongoData = await mongoResponse.json();
            console.log(mongoData);

            if (mongoData.insertedId) {
                toast.success('Successfully Reviewed!');
            }
            form.reset();
        } catch (error) {
            console.error("Error:", error);
            toast.error('Error while submitting review.');
        }
    };




    return (
        <div className='py-20 font-serif'>
            <h1 className='text-center text-3xl font-extrabold mb-2'>People talk about us</h1>
            <p className='text-center md:mx-32 mx-10 mb-4'>We are Eduplus, an admission website helping students with educational opportunities. At Eduplus, we provide guidance and support for students seeking admissions. Our platform simplifies the application process and offers valuable resources. Join us on the journey to academic success.</p>
            <div className=" md:flex items-center justify-center gap-8">
                <div>
                    <Lottie className='w-full h-72' animationData={groovyWalkAnimation} loop={true} />
                </div>
                <form onSubmit={handleAddReview} className='space-y-3 w-96'>
                    <input type="text" placeholder="Enter your Name" className="input input-bordered input-primary w-full" name="name" /> <br />

                    <input type="email" placeholder="Enter your Email" className="input input-bordered input-primary w-full" name="email" /><br />

                    <input type="text" placeholder="Enter your Ratings" className="input input-bordered input-primary w-full" name="ratings" /><br />

                    <input type="file" name="image" className="file-input file-input-bordered file-input-primary
                     w-full" /> <br />

                    <select defaultValue="Select College" name="category" className="select select-primary w-full">
                        <option disabled >Select College</option>
                        <option>Harmony University College</option>
                        <option>TechHub Institute</option>
                        <option>Creative Arts Academy</option>
                        <option>Science & Technology University</option>
                        <option>Business Management Institute</option>
                        <option>Medical Sciences College</option>
                    </select><br />

                    <textarea name="message" className="textarea textarea-primary w-full" placeholder="Message"></textarea> <br />

                    <input className='btn btn-primary' type="submit" value="Submit" />
                </form>
            </div>
        </div>

    );
};

export default AddReview;