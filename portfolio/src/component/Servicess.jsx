import React from 'react'

// const data = [
//     {
//         id: 1,
//         service: "DATABASE SERVICES",
//         description: "database design and optimization",
//         price: " Starting from $1200",
//         provider: "DataMasters Ltd",
//         icon: "https://portfolio.durlavparajuli.com.np/vite.svg"
//     },  
//     {
//         id: 2,
//         service: "Mobile App Development",
//         description: "Mobile app development for iOS and Android",
//         price: " Starting from $2000",
//         provider: "DataMasters Ltd",
//         icon: "https://portfolio.durlavparajuli.com.np/vite.svg"
//     },  
//     {
//         id: 3,
//         service: "DATABASE SERVICES",
//         description: "database design and optimization",
//         price: " Starting from $1200",
//         provider: "DataMasters Ltd",
//         icon: "https://portfolio.durlavparajuli.com.np/vite.svg"
//     },   

// ];
import { useState, useEffect } from 'react';

const URL = "https://api.durlavparajuli.com.np/api/data/service";

const Servicess = () => {
    const [data, setData] = useState([]);

    // Function to fetch data from the API
    const fetchApi = async () => {
        try {
            const res = await fetch(URL);
            if (res.ok) {
                const resData = await res.json();
                console.log(resData); // Log the data to inspect the structure
                setData(resData); // Ensure that `resData` is an array
            } else {
                alert("Failed to fetch data.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div className='pt-40 w-screen bg-black text-white flex flex-col justify-center items-center '>
            <h1 className='text-5xl font-semibold pb-4'>Our Services</h1>
            <div className='grid grid-cols-3 gap-24'>
                {data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className='border-2 border-white w-[350px] h-[450px] flex flex-col justify-center items-center gap-4'
                        >
                            <div className='border-2 w-44 h-44 border-white rounded-full flex justify-center items-center'>
                                <img src="https://portfolio.durlavparajuli.com.np/vite.svg" alt="" className='h-36' />
                            </div>
                            

                            <div className='flex flex-col justify-center items-center text-center gap-4'>
                                <span className='text-5xl font-semibold'>{item.service}</span>
                                <span className='text-xl'>{item.description}</span>
                            </div>
                            <div className='flex flex-col border-2 border-white w-80 justify-center items-center'>
                                <span className='text-lg'>Provider: {item.provider}</span>
                                <span className='text-yellow-400  text-lg'>Price:{item.price}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading services...</p> // Display a message while data is being loaded
                )}
            </div>
        </div>
    );
};

export default Servicess;
