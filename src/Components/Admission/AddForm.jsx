import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/admission.json";
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';


const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
//console.log(image_hosting_token);

const AddForm = () => {
   

    const handleAddReview = async (event) => {
        event.preventDefault();

        // Get the form data
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const birthday = form.birthday.value;
        const image = form.image.files[0]; // Get the image file
        const college = form.college.value;
        const subject = form.subject.value;
        const address = form.address.value;
       

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
            const newReview = { name,  subject, email, birthday, college, phone, address, image: imageUrl };
            console.log("New Review:", newReview);

            // Use your API URL for sending data to MongoDB
            const apiURL = "https://college-booking-server-hazel.vercel.app/myCollege";
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
        <div className='py-14 font-serif'>
            <h1 className='text-center text-3xl font-extrabold mb-2'>Please, Fill in the Admission form</h1>
            <p className='text-center md:mx-32 mx-10 mb-4'>We are Eduplus, an admission website helping students with educational opportunities. At Eduplus, we provide guidance and support for students seeking admissions. Our platform simplifies the application process and offers valuable resources. Join us on the journey to academic success.</p>
            <div className=" md:flex items-center justify-center gap-10">
                <div>
                    <Lottie className='w-full h-72' animationData={groovyWalkAnimation} loop={true} />
                </div>
                <form onSubmit={handleAddReview} className='space-y-3 w-96'>
                    <input type="text" placeholder="Enter your Name" className="input input-bordered input-primary w-full" name="name" /> <br />

                    <input type="email" placeholder="Enter your Email" className="input input-bordered input-primary w-full" name="email" /><br />

                    <input type="date" placeholder="Enter your Birthday" className="input input-bordered input-primary w-full" name="birthday" /><br />

                    <input type="text" placeholder="Enter your phone number" className="input input-bordered input-primary w-full" name="phone" /><br />

                    <input type="file" name="image" className="file-input file-input-bordered file-input-primary
                     w-full" /> <br />

                    <select defaultValue="Select College" name="college" className="select select-primary w-full">
                        <option disabled >Select College</option>
                        <option>Harmony University College</option>
                        <option>TechHub Institute</option>
                        <option>Creative Arts Academy</option>
                        <option>Science & Technology University</option>
                        <option>Business Management Institute</option>
                        <option>Medical Sciences College</option>
                    </select><br />

                    <input type="text" placeholder="Enter your Subject" className="input input-bordered input-primary w-full" name="subject" /> <br />

                    <textarea name="address" className="textarea textarea-primary w-full" placeholder="Address"></textarea> <br />

                    <input className='btn btn-primary' type="submit" value="Submit" />
                </form>
            </div>
        </div>

    );
};

export default AddForm;


