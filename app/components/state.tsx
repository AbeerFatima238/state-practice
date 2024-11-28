"use client"
import { useState } from "react"
function State (){
    const[count , setCount] = useState(0)
    return(
        <div >
            <div className="flex justify-center mt-4 font-serif font-bold">
            MY COUNT IS : {count}
            </div>
            <br />
            <br />
            <div className="flex justify-center">
            <button onClick={() =>setCount(count +1)} className="bg-black text-white py-2 px-10 rounded-md">Increment</button>
    
            </div>
            <br />
            <br />
            <div className="flex justify-center">
            <button onClick={() =>setCount(count -1)} className="bg-black text-white py-2 px-9 rounded-md">Decrement</button>
            </div>
        </div>
    )
}
export default State