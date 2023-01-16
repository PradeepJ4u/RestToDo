import {PropTypes} from 'prop-types'
import './Counter.css'

export default function CounterButton({by, incrementMainClicked, decrementMainClicked}) {

    return(
        <div className="Counter">
             <div>
                <button className="counterButton" 
                    onClick={() => incrementMainClicked(by)}
                >+{by}</button>
                <button className="counterButton" 
                    onClick={() => decrementMainClicked(by)}
                >-{by}</button>
            </div>
       </div>
    )
}

CounterButton.propTypes = {
    by:PropTypes.number

}

CounterButton.defaultProps = {
    by: 10

}