import './App.css';
import {Switch} from './components/Switch/Switch';
import {Counter1} from './components/Counter/Counter1';
import {Newspaper} from './components/Article/Newspaper';
import {container} from './components/forms/forms';
import {FormWithValidation} from './components/FormWithValidation/FormWithValidation';
import {FormWithSelect} from './components/FormWithSelect/FormWithSelect';

export default function App() {
    return (
        <div className="AppContainer">
           {/* <Switch/>
            <Counter1/>
            <Newspaper/>*/}
            {/*{container}*/}
            {/*<FormWithValidation/>*/}
            <FormWithSelect/>
        </div>
    );
}

