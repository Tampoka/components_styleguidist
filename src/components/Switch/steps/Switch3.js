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
    return (
        <div className="switch">
            <div className="choice"
                 onClick={select(CREDITCARD)}>Credit card
            </div>
            <div className="choice"
                 onClick={select(BTC)}>Bitcoin
            </div>
            Pay with: {payMethod}
        </div>
    )
}
export default Switch