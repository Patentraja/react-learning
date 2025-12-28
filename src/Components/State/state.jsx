import { useState } from "react"

    const State=()=>{
        
        const [count, setcount]=useState(1);
        const add=()=>{
        setcount(count+1)
                       }
        return <>
        <button onClick={add}>click</button>
          <p>{count}</p>
            </>

}
export default State