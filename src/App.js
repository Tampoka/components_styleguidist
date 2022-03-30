import './App.css';
import {Switch} from './components/Switch/Switch';
import {Counter1} from './components/Counter/Counter1';
import {Container} from './components/Article/Container';
import {Newspaper} from './components/Article/Newspaper';

export default function App() {
    return (
        <div className="AppContainer">
            <Switch/>
            <Counter1/>
            <Newspaper/>
        </div>
    );
}

