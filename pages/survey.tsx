import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import QuestionCard from '../components/QuestionCard'
import questionList, {Question} from "../data/QuestionList"
import { useRouter } from 'next/router';

type Props = {}

const IntroQuestionScreen = (props: Props) => {
    const router = useRouter();
    const [id, setId] = useState("phase 1")
    const gender = ["male", "female","other"];
    const relationship=["parent","sibling", "close-friend","distant-relative","spouse/ partner","child"]
    const selected = useSelector((state:any) => state.question.choices)
    const [selectedLen,setSelectedLen] = useState<number>(0)
    // const history = useHistory()
    useEffect(() =>{
        console.log("selected -> ", selected)
        var len=0

        for (var element in selected){
            len++
        }
        console.log("selected len-> ", len)

        setSelectedLen(len);

    },[selected])

    const confirmFirst = () =>{
        if (selected["gender"] === undefined || selected["relationship"] === undefined){
            console.log("completed phase 1");
            return true
        }else{
            console.log("phase 1 pending ...");
            return false
        }
    }
    const confirmSecond = () => {
        var len=0

        for (var element in selected){
            len++
        }
        console.log("len rn is: ", len);

        console.log(len)
        if (len < 7){
            return true
        }else{
            return false
        }
    }

    return(
        <div className="flex flex-col bg-[#ade3ad] px-[10%] py-4  flex-4/5 h-[92vh]   ">
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 my-5">
            <div className={`bg-[#efb660] h-1.5 rounded-full duration-1000`} style={{width :`${(selectedLen/7)*100}%`}} ></div>
            </div>
        
        { 
            id=="phase 1"?
            (       
             <div className="bg-scroll overflow-scroll ">
                    <div className="w-full flex flex-row my-3">
                    <img src='/gender.png' className="w-[80px] h-[80px] bg-[#589478] p-3 border rounded-md shadow-md mr-6" />
                     <QuestionCard description="Select gender of recipient" option={gender} name="gender" />
                    </div>

                    <div className="w-full flex flex-row">
                    <img src='/relation.png' className="w-[80px] h-[80px] bg-[#abc780] p-3 border rounded-md shadow-lg mr-6" />
                    <QuestionCard description="Select relationship to recipient" option={relationship} name="relationship" />
                    </div>
                 <div className="flex justify-center">
                 <button disabled={confirmFirst()} onClick={() => setId("phase 2")}  className="mx-2 px-6 p-3 border text-[#f5f5f7] bg-[#302e3c] rounded-3xl  border-[#302e3c]">
                    Next ➣ 
                </button>
                 </div>
             </div>
            )
             :
            (
            <div className='bg-scroll overflow-scroll '>
                {questionList.map((qa:Question) => 
                {return <QuestionCard key={qa.question} description={qa.question} option={qa.answer} name={qa.name} />})}
                <div className="flex justify-center my-5" >
                        {/* <FontAwesomeIcon icon="arrow-circle-right" color="black" size="3x"   /> */}
                        {/* {confirmSecond() === false ? (<p>{selected["gender"]}</p>):(<p>nope</p>) } */}
                        <button disabled={confirmSecond()} onClick={()=>router.replace("/gifts")}   className="mx-2 px-6 p-3 border text-[#f5f5f7] bg-[#302e3c] rounded-3xl  border-[#302e3c]">Next ➣ </button>

                </div>
            </div>
            )
            }

        </div>
    )
}

export default IntroQuestionScreen