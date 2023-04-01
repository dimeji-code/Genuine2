import React from 'react'
import Link from 'next/link'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className="flex flex-col bg-[#ade3ad] px-[10%] py-4   h-[92vh]  ">
            <div className="flex flex-row justify-between h-4/5">
                <div className="flex flex-col justify-center w-1/2">
                    <h1 className="text-3xl md:text-7xl text-[#302e3c] my-2 font-medium">Having trouble finding the perfect gift?</h1>
                    <h4 className="hidden md:inline-block sm:text-lg md:text-xl text-[#302e3c] my-3">
                    Find popular suggestions or get unique gift ideas for that special someone.
                    </h4>
                    <h5 className="text-lg md:text-xl text-[#302e3c] my-3">
                    <a >To Begin, click on the <strong>add</strong> icon</a>
                    </h5>
                </div>

                <div className="flex flex-col w-1/2 justify-center items-center">
                    <Link href='/survey' className=" moveUpDown border madAnim w-full md:w-2/3 bg-[#f7f4f7] flex justify-center shadowInner  border-sm rounded-sm items-end border-[#f3f0f0]  duration-1000 hover:-translate-y-1">
                    <div  className=' hover:animate-spin'>
                        <img alt="..." className="w-[300px] p-5 border-[#687668]  hover:cursor-pointer" src={"/add500.png"} />
                    </div>
                    </Link>
                </div>

            </div>
            <div className='flex flex-row justify-center items-center h-1/5'>
                <Link href={'/random'}>
                <button className='mx-2 px-6 p-3 border text-[#302e3c]  rounded-3xl  border-[#302e3c] '>Random</button>
                </Link>
            </div>


        {/* <div className='flex flex-row justify-evenly items-end  h-1/2 '>
            <div className='w-1/3 h-2/3 border border-[#ded4e771] bg-white drop-shadow-sm rounded-sm  overflow-hidden'>
                <div className='flex flex-row h-full'>
                    <div className='flex flex-col flex-2/3 w-2/3 p-3'>
                        <h2 className='text-xl text-[#151634e9]'>Musically Inclined</h2>

                        <h3>Instruments, Gear, Software, Concer tickets and more.</h3>
                    </div>
                    <div className='flex flex-1/3 w-1/3'>
                        <img src={'/music2.png'}/>
                    </div>
                </div>
            </div>

            <div className='w-1/3 h-2/3 mx-5 border border-[#ded4e771] bg-white rounded-sm drop-shadow-sm  overflow-hidden'>
                <div className='flex flex-row h-full'>
                    <div className='flex flex-col flex-2/3  w-2/3 p-3'>
                        <h2 className='text-xl rounded text-[#151634e9]'>Fashionistas</h2>
                        <h3>Sportswear, shoes, and seasonal collections.</h3>
                    </div>
                    <div className='flex flex-1/3 w-1/3'>
                        <img src={'/fashion2.png'}/>
                    </div>
                </div>
            </div>

            <div className='w-1/3 h-2/3 border border-[#ded4e771] bg-white drop-shadow-sm rounded-sm overflow-hidden'>
                <div className='flex flex-row h-full'>
                    <div className='flex flex-col flex-2/3 w-2/3 p-3'>
                    <h2 className='text-xl text-[#151634e9]'>Tech Savvy</h2>
                    <h3>Gadgets like smartphones, tablets and gaming consoles.</h3>
                    </div>
                    <div className='flex flex-1/3 w-1/3 object-contain'>
                        <img className='object-cover w-full' src={'/tech2.png'}/>
                    </div>
                </div>
            </div>
        </div> */}


        </div>
  )
}

export default Main