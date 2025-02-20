
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { querykeys } from '../utils/Constant';
import { fetchDatapublic } from '../utils/Queries';
import { useNavigate } from 'react-router-dom';
const URL = "https://api.durlavparajuli.com.np/api/data/service";

const Servicess = () => {
    const navigate=useNavigate()
    const { data, error, isLoading } = useQuery({
        queryKey: querykeys.services,
        queryFn: () => fetchDatapublic(URL),
    });

    // if (isLoading) {
    //     return <p>Loading services...</p>;
    // }

    // if (error) {
    //     console.error("Error fetching data:", error);
    //     return <p>Failed to load services.</p>;
    // }
    console.log("Fetched data:", data);
    return (
        <div className='pt-40 w-screen bg-black text-white flex flex-col justify-center items-center '>
            <h1 className='text-5xl font-semibold pb-4'>Our Services</h1>
            <div className='grid grid-cols-3 gap-24'>
                {data?.length > 0 ? (
                    data?.map((item) => (
                        <div 
                        onClick={() => {
                            navigate(`/servicess/${item._id}`)
                        }}
                            key={item.id}
                            className='border-2 border-white w-[350px] h-[450px] flex flex-col justify-center items-center gap-4  transform hover:scale-105 transition-transform duration-300'
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
                    <p>No services available.</p>
                )}
            </div>
        </div>
    );
};

export default Servicess;