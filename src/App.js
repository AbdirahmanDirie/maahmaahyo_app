import React from 'react';
import Quote from './Quote'

 
 const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='mx-20 max-w-lg mt-48 bg-white shadow-lg'>
        <p className='px-24 py-4 text-2xl font-semibold uppercase'>Maahmaahyo Soomaali</p>
      </div>
      <Quote />
    </div>
   
  )
}

export default App;