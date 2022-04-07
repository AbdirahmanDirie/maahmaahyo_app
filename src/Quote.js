import React, { useState } from 'react'
import Data from './Data'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid' 
const Quote = () => {

    const [index, setIndex] = useState(0)

    const {id,Text} = Data[index];

    const checkQuote=(number)=>{

      if(number > Data.length -1){
        return 0
      }
      if(number < 0){
        return Data.length -1;
      }

      return number;
    }


        const rightHandler = () => {
            setIndex((index) => {
                let newIndex = index + 1;

                return checkQuote(newIndex);
                // return newIndex;
            })
        }

    const leftHandler = () => {
    setIndex((index) =>{
        let newIndex = index - 1;

        return checkQuote(newIndex);
        // return newIndex;
    })
    }


  return (
    <div>

        <div className="flex justify-center items-center mx-20 max-w-lg mt-10">

<div className="bg-white shadow-lg h-ful rounded-sm">
  <div>
    <p className="py-10 px-10 text-lg font-semibold">" {Text} "</p>

    <div className='px-10 flex justify-between mb-2 text-[#FBBF24] cursor-pointer'>
        <button onClick={leftHandler}>
            <ArrowNarrowLeftIcon className='h-10 w-10'/>
        </button>
        <button onClick={rightHandler}>
           <ArrowNarrowRightIcon className='h-10 w-10'/>
         </button>
    </div>

    <div className='flex justify-center items-center mb-10'>
        <span className='bg-[#FBBF24] text-white rounded-full px-2.5 py-1 text-lg font-bold'>{id}</span>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}

export default Quote;