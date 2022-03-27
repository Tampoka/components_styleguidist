import {Counter} from './Counter';

export const CounterWrapper = props => (
    <div key="counterWrapper">
        <Counter initialValue={props.initialValue} />
    </div>
);