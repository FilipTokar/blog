import Post from '@/components/Post'
import React from 'react'

const page = () => {
  return (
    <>
    <h2 className="text-center font-bold text-3xl py-5 sm:text-left sm:text-4xl md:text-5xl lg:text-6xl">Posts</h2> 
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </div>
    </>
    
  )
}

export default page
