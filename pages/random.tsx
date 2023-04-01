import React, { useState } from 'react'
import GIFTS from '@/data/Gifts'

const Random = () => {
    const [cur, setCurrent] = useState<number>(Math.floor(Math.random()* (GIFTS.length - 0) + 0))

  return (
    <div className='flex flex-col bg-[#ade3ad] px-1  md:px-[10%] py-4 justify-center items-center flex-4/5 w-full min-h-[92vh]'   >
        <div className='flex flex-row px-4 md:px-[10%] py-4 justify-center items-center flex-4/5 w-full min-h-4/5 md:min-h-3/5'   >
            <div className='mr-5 w-1/2'>
                <h3 className='text-xl md:text-2xl font-semibold'>{GIFTS[cur].name}</h3>
                <hr className="border-t-2 rounded-md my-5 border-t-black"></hr>
                <h3>Estimate <span className="text-[#2d732d]">${GIFTS[cur].price}</span></h3>
                <h3>{GIFTS[cur].description}</h3>
            </div>
            <div className="w-1/2">
            <img alt="..." src={GIFTS[cur].link} />

            </div>
        </div>
        <div className="min-h-1/5 md:h-2/5 flex">
        <button onClick={()=>{setCurrent(Math.floor(Math.random()* (GIFTS.length - 0) + 0))}} className='mx-2 px-6 p-3 border text-[#302e3c]  rounded-3xl  border-[#302e3c] '>Random</button>
        </div>

    </div>
  )
}

export default Random