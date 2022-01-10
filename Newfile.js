import React from "react";
const Newfile=()=>{
    const array =[
        ["name","age"],
        ["pooja",23]
    ]
    array[0].map((value,index)=>{
        array[1].map((val,index1)=>{
            if(index===index1){
                return (value ,val);
            }
        })
    })
    return(
        <div>
            { array[0].map((value,index)=>{
                return(
                    array[1].map((val,index1)=>{
            if(index===index1){
                console.log(value, val)
            }
        })
                )
        
    })}
        </div>
    )
}
export default Newfile;