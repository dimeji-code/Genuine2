import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="flex flex-col bg-[#ade3ad] px-[10%] py-4  flex-4/5    ">
        <div className='py-5 h-2/5'>
            <h3 className="text-4xl font-normal my-5">About Genuine</h3>
            <hr className="border-t-2 rounded-md my-5 border-t-black"></hr>

            <p className="text-xl font-normal">Genuine is a form based application that uses a survey to create a digital profile of an anonymous recepient. <br/>This profile is then used to generate a gift for the person of interest. The generated images are suggestions and <strong>all prices are estimates</strong>.</p>
            <p  className='text-sm my-5 text-[#212730]'>* Free to use. No Sign in required *</p>
        </div>
        <div className='h-3/5 my-3'>
            <h3 className="text-4xl font-normal my-5">Features</h3>

            <div className='grid grid-cols-3 gap-4'>

                <div className='mx-2'>
                    <img src="/filter2.png" className="w-1/5"/>
                    <h4 className='text-3xl my-2'>Sorting</h4>
                    <hr className="border-t-2 rounded-md my-5 border-t-black"></hr>
                    <p className='text-xl'>Gifts are delegated by categories that are identified in the surveys. An item could fall under multiple categories as our algorithm allows.</p>
                </div>
                <div className='mx-2'>
                    <img src="/delete2.png" className="w-1/5"/>
                    <h4 className='text-3xl my-2'>Data Storage</h4>
                    <hr className="border-t-2 rounded-md my-5 border-t-black"></hr>
                    <p className='text-xl'>None of the data is stored past the gift generation cycle.
                    <br/>No piece of information entered is given to any third parties.</p>
                </div>
                <div className='mx-2'>
                    <img src="/random2.png" className="w-1/5"/>
                    <h4 className='text-3xl my-2'>Randomization</h4>
                    <hr className="border-t-2 rounded-md my-5 border-t-black"></hr>
                    <p className='text-xl'>Gift ideas can also be generated randomly to save time and to spice things up.</p>

                </div>
            </div>
        </div>
        <div className='h-3/5 my-3'>
            <h3 className="text-4xl font-normal my-5">Version Comparison</h3>

            <div className='grid grid-cols-2 gap-4'>
                <div className='mx-2'>
                    <h4 className='text-3xl my-2'>Current</h4>
                    <hr className="border-t-2 rounded-md my-5 border-t-black"></hr>
                    <p className='text-xl'>Randomization.</p>
                    <p className='text-xl'>Item Sorting.</p>
                    <p className='text-xl'>Faster Algorithms.</p>
                    <p className='text-xl'>Progression Bar Display.</p>
                </div>
                <div className='mx-2'>
                    <h4 className='text-3xl my-2'>V1</h4>
                    <hr className="border-t-2 rounded-md my-5 border-t-black"></hr>
                    <p className='text-xl'>Gift Presentation Statistics.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About