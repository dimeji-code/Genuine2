import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import GiftItem from "../components/GiftItem"
import GIFTS,{Gift} from "../data/Gifts"
import {useRouter} from "next/router"
import { clearOptions } from '@/reducers/questionReducer'
const Recommendations = () =>{
    const [sortedGifts,setSortedGifts] =  useState<Gift[]>([])
    const [st,setSt] =  useState("default")
    const selected = useSelector ((state:any) => state.question.choices)
    const dispatch = useDispatch()
    const router = useRouter()

    let finalSort:Gift[] = []

    useEffect(()=>{
       finalSort =  sortByBudget(GIFTS)
       console.log("UE EFFECT RAN");
       
        setSortedGifts(finalSort)
    },[])

    const sortByTag = (items:Gift[]) : Gift[] =>  {
        var finalSort:Gift[] = []

        for (var item in items){
            for (var tag in items[item].tags){
                if(selected["interest"] == items[item].tags[tag]){
                    // setSortedGifts((sortedGifts) => [...sortedGifts, items[item]])
                    finalSort.push(items[item])
                }
            }
        }
        // setSortedGifts(finalSort)
        return finalSort
    }

    const sortByBudget = (list:Gift[]) :Gift[] =>{
        var inBudget:Gift[] = list.filter((item) => item.price <= selected["budget"])
        return sortByTag(inBudget)
    }
    const handleChange = () =>{
        console.log("clearing every state");
        
        dispatch(clearOptions({}))
    }
    useEffect(()=>{
        router.events.on('routeChangeComplete',handleChange )

    },[router])
    
    return(
        <div className="flex-row bg-[#ade3ad] flex w-full p-6 h-[92vh]">
            
            <div className="w-2/5 md:w-1/4  ">
                <h3 className="text-md md:text-xl">Suggestions for <span className="text-[#354b6d] font-semibold">Recipient</span>.</h3>
                <h4 className='text-lg mt-8'>Sort by :</h4>
                <div className="flex flex-row items-center my-4 md:my-2">
                    <input onClick={()=>{setSt('highToLow')}} className="form-check-input mr-4 " type="radio" name={'sort'} id={"1"}  color="#fff"/>
                    <label className="text-sm md:text-lg" htmlFor='1'>
                        Highest to Lowest
                    </label>
                </div>
                <div className="flex flex-row items-center my-4 md:my-2">
                    <input onClick={()=>{setSt('lowToHigh')}} className="form-check-input mr-4 " type="radio" name={'sort'} id="2"  color="#fff"/>
                    <label className="text-sm md:text-lg" htmlFor='2' >
                        Lowest to Highest
                    </label>
                </div>
                <div className="flex flex-row items-center my-4 md:my-2">
                    <input onClick={()=>{setSt('A-Z')}} className="form-check-input mr-4 " type="radio" name={'sort'} id="3"  color="#fff"/>
                    <label className="text-sm md:text-lg" htmlFor='3' >
                        A-Z
                    </label>
                </div>

            </div>
                
            <div className=" overflow-scroll w-3/5 md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {st =="default" && sortedGifts.map((gift:Gift, index) => { 
                        return <div key={index} className="">
                        <GiftItem   name={gift.name} img={gift.link} desc={gift.description} cost={gift.price} />
                     </div>
                    
                    } )
                    }
                    { st =="lowToHigh" &&
                        sortedGifts
                        .sort((first,last) => first.price - last.price)
                        .map((gift:Gift, index) => { 
                            return <div key={index} className="">
                            <GiftItem   name={gift.name} img={gift.link} desc={gift.description} cost={gift.price} />
                         </div>
                        
                        } )
                    }
                    { st =="highToLow" &&
                        sortedGifts
                        .sort((first,last) => last.price - first.price)
                        .map((gift:Gift, index) => { 
                            return <div key={index} className="">
                            <GiftItem   name={gift.name} img={gift.link} desc={gift.description} cost={gift.price} />
                         </div>
                        
                        } )
                    }
                    { st =="A-Z" &&
                        sortedGifts
                        .sort(function (a, b) {
                            if (a.name < b.name) {
                              return -1;
                            }
                            if (a.name > b.name) {
                              return 1;
                            }
                            return 0;
                          })
                        .map((gift:Gift, index) => { 
                            return <div key={index} className="">
                            <GiftItem   name={gift.name} img={gift.link} desc={gift.description} cost={gift.price} />
                         </div>
                        
                        } )
                    }
                </div>
            </div>
        </div>
  )
}

export default Recommendations