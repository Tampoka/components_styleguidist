import {useState} from 'react';

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
        return (
            <div className="choice"
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