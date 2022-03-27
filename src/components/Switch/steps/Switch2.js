import { useState} from 'react';

const CREDITCARD = "Credit card";
const BTC = "Bitcoin";

 const Switch =()=> {
    const [payMethod]=useState(BTC)
        return (
            <div className="switch">
                <div className="choice">Credit card</div>
                <div className="choice">Bitcoin</div>
                Pay with: {payMethod}
            </div>
        )
}
export default Switch