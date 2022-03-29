import {useState} from 'react';
import '../Switch.css'

export const Choice = ({active, onClick, label}) => {
    const cssClasses = ["choice"];
    if (active) {
        // <-- check props, not state
        cssClasses.push("active")
    }

    return (
        < div className={cssClasses.join(" ")}
              onClick={onClick}>

            {label}
            {/* <-- allow any label */}
        </div>
    )
}

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
            <Choice onClick={select(CREDITCARD)}
                    active={payMethod === CREDITCARD}
                    label="Pay with Credit Card"/>
            <Choice onClick={select(BTC)}
                    active={payMethod === BTC}
                    label="Pay with Bitcoin"/>
            Paying with: {payMethod}</div>
    );
}

export default Switch