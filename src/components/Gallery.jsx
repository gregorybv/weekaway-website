import React from 'react';

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1440px] m-auto w-full py-16 px4'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt="/"/>
        </div>
        <div>
          <img className='w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1595184749330-4ed007c607e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
            alt="/"/>
        </div>
        <div>
          <img className='w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="/"/>
        </div>
        <div>
          <img className='w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1598580415913-0e2323a66f02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="/"/>
        </div>
        <div>
          <img className='w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1515016454727-48ddf26ac789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="/"/>
        </div>
      </div>
    </div>
  )
}

export default Gallery



