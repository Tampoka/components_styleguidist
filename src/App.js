import './App.css';
import {Switch} from './components/Switch/Switch';
import {Counter1} from './components/Counter/Counter1';
import {Newspaper} from './components/Article/Newspaper';
import {forms} from './components/forms/forms';
import {FormWithValidation} from './components/FormWithValidation/FormWithValidation';
import {FormWithSelect} from './components/FormWithSelect/FormWithSelect';

export default function App() {
    return (
        <div className="AppContainer">
           {/* <Switch/>
            <Counter1/>
            <Newspaper/>*/}
            {forms}
            {/*<FormWithValidation/>*/}
            {/*<FormWithSelect/>*/}
        </div>
    );
}

