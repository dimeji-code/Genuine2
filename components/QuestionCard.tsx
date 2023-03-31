import React,{useState} from 'react'
// import '../index.css';
import {selectOption} from "../reducers/questionReducer"
import {useDispatch, useSelector} from "react-redux"

type Props = {
    description:string,
    option:string[],
    name:string
}

const QuestionCard = (props: Props) => {
    const selected = useSelector((state:any) => state.question.choices)

    const [formData, setFormData] = useState({ })
    const dispatch = useDispatch();


    const handleChange = (event:any) =>{
        const value = event.target.value
        const name = event.target.name

         setFormData({
            ...formData,
            [name]:value
        })
        dispatch(selectOption({name:name, value:value}))


    }
   

    const mapOptions = (answers:any) => {
        console.log(selected)

        return(
            answers.map((opt:string,index:number) => { return(
            <div className="flex flex-row items-center my-3">
                <input value={opt} onChange={handleChange} className="form-check-input mr-4 " type="radio" name={props.name} id={index.toString()} color="#fff"/>
                <label className="form-check-label" htmlFor={index.toString()}>
                    {opt}
                </label>
            <div>
            {/* <p>{formData.gender}</p> */}
            </div>
            </div>
            
            )
            }
        )
        )
    }

return(
<div>  

    <div className="flex flex-col">
        <div className="card-header ">
        {/* {props.name} */}
        </div>
        <div className="card-body cardbody">
        <h5 className="text-2xl">{props.description} </h5>
            {mapOptions(props.option)}
        </div>
    </div>

</div>

    )
}

export default QuestionCard