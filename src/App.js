import './App.css';
import {Counter1} from './components/Counter/Counter1';

export default function App() {
  return (
    <div className="App">
    <Counter1 initialValue={30}/>
    </div>
  );
}

