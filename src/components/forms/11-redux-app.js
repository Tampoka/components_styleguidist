import {reducer} from './11-redux-reducer';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {fetchPeople, savePeople} from './11-redux-actions';
import {Form} from './11-redux-form';
import {Component} from 'react';
import {connect, Provider} from 'react-redux';

const ReduxForm=connect(mapStateToProps,mapDispatchToProps)(Form)

const store=createStore(reducer,applyMiddleware(thunkMiddleware))

export class Eleven extends Component{
    static displayName = '11-redux-app'

    componentDidMount(){
        store.dispatch(fetchPeople())
    }

    render() {
        return (
            <Provider store={store}>
                <ReduxForm />
            </Provider>
        )
    }
}

function mapStateToProps(state) {
     return {
         isLoading: state.isLoading,
         fields: state.person,
         people: state.people,
         saveStatus: state.saveStatus
     }
     }

function mapDispatchToProps(dispatch) {
     return {onSubmit: people => {
         dispatch(savePeople(people));
         }
     }
    }


