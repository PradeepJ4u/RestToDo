import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {

    const [counter, counterFunc] = useState(0)

    function incrementMainClicked (by){
        counterFunc(counter + by)
    }

    function decrementMainClicked (by){
        counterFunc(counter - by)
    }

    function resetButtonClicked (){
        counterFunc(0)
    }
 
    // const buttonStype = {
    //     fontSize:"16px",
    //     backgroundColor:"#00a5ab",
    //     width:"100px",
    //     margin:"10px",
    //     color:"white",
    //     padding:"15px",
    //     borderRadius:"30px"
    //     }

    return(
        <div className="Counter">
            <div>
                <CounterButton by={10} incrementMainClicked={incrementMainClicked} decrementMainClicked={decrementMainClicked} />
                <CounterButton by={20} incrementMainClicked={incrementMainClicked} decrementMainClicked={decrementMainClicked} />
                <CounterButton by={30} incrementMainClicked={incrementMainClicked} decrementMainClicked={decrementMainClicked} />
            </div>
            <span className="count">{counter}</span>
            <div>
                <button className="resetButton" 
                        onClick={resetButtonClicked}
                    >Reset</button>
            </div>

       </div>
    )
}