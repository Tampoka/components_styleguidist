import {useState} from 'react';
import '../Switch.css'

const CREDITCARD = "Credit card";
const BTC = "Bitcoin";

const Switch = () => {
    const [payMethod, setPayMethod] = useState(BTC)

    const select = (choice) => {
        return evt => {
            setPayMethod(choice)
        }
    }

    const renderChoice = (choice) => {
        const cssClasses=["choice"]
        if(payMethod===choice)
            cssClasses.push("active")
        return (
            <div className={cssClasses.join(" ")}
                 onClick={select(choice)}>{choice}
            </div>
        )
    }

    return (
        <div className="switch">
            {renderChoice(CREDITCARD)}
            {renderChoice(BTC)}
            Pay with: {payMethod}
        </div>
    )
}
export default Switch