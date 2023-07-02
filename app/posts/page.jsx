import Post from '@/components/Post'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-3 gap-6'>
     <Post/>
     <Post/>
     <Post/>
    </div>
  )
}

export default page
