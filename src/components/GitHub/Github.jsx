import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    let data = useLoaderData();
  return (
    <>
    <div className='flex justify-evenly items-center mb-5'>
        <div className='flex h-1/4 w-55 overflow-hidden md:w-1/6 md:mt-5'>
            <img className='w-full h-full object-cover' src={data.avatar_url} alt="" />
        </div>

        <div className='shadow bg-gray-100 p-5  '>

            <div><p className='italic inline'>Id is : </p> <span className='text-2xl '>{data.id}</span></div>
            <div><p className='italic inline'>Bio is : </p> <span className='text-2xl '>{data.bio}</span></div>
            
            <div><p className='italic inline'>followers is : </p> <span className='text-2xl '>{data.followers}</span></div>
            
        </div>
    </div>
    </>
  )
}

export default Github

export const gitData = async ()=>{
   let response = await fetch("https://api.github.com/users/itanmay728");
   
   return response.json();
}