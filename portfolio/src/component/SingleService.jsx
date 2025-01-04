import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SingleService = () => {
    const [data, setData] = useState({});
    const { id } = useParams()
    const URL = `https://api.durlavparajuli.com.np/api/data/service/${id}`
    const navigate = useNavigate();
    const goback =()=>{
        navigate("/servicess")
    }
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
    useEffect(() => {
        fetchApi();
    }, []);
    return (
        <div className=' w-screen bg-black text-white  h-screen flex justify-center items-center'>
            <div className='grid grid-cols-3 gap-24'>
                <div
                    className='border-2 border-white w-[350px] h-[450px] flex flex-col justify-center items-center gap-4'
                >
                    <div className='border-2 w-44 h-44 border-white rounded-full flex justify-center items-center'>
                        <img src="https://portfolio.durlavparajuli.com.np/vite.svg" alt="" className='h-36' />
                    </div>
                    <div className='flex flex-col justify-center items-center text-center gap-4'>
                        <span className='text-5xl font-semibold'>{data.service}</span>
                        <span className='text-xl'>{data.description}</span>
                    </div>
                    <div className='flex flex-col border-2 border-white w-80 justify-center items-center'>
                        <span className='text-lg'>Provider: {data.provider}</span>
                        <span className='text-yellow-400  text-lg'>Price:{data.price}</span>
                    </div>
                    <button onClick={goback} className='bg-white text-black h-20 w-36 mb-4 rounded-md text-lg font-semibold'> Go Back</button>
                </div>  
            </div>
        </div>
    )
}
export default SingleService

