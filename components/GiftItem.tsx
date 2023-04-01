import React from 'react'

type Props = {
    img:string,
    cost:number,
    name:string,
    desc:string
}

const GiftItem = (props:Props) =>{
    return(
        <div className="card bg-[#f8f8f8] text-[#111d14] shadow-sm rounded-md overflow-hidden">
            <img src={props.img} className="card-img" alt="..."/>

            <div className="item-inner shadow-inner">
                <div className="p-4">
                    <h5 className="text-lg md:text-2xl">{props.name}</h5>
                    <p className="text-md md:text-xl"> {props.desc}</p>

                </div>
                <div className="p-4 text-[#519f5d] border-t">
                <p >~ ${props.cost}</p>

                </div>
            </div>
        </div>
    )
}
export default GiftItem