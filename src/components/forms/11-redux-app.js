import {reducer} from './11-redux-reducer';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {fetchPeople, savePeople} from './11-redux-actions';
import connect from 'react-redux/lib/connect/connect';
import {Form} from './11-redux-form';

// const Form=require('./11-redux-form.js')

const ReduxForm=connect(mapStateToProps,mapDispatchToProps)(Form)

const store=createStore(reducer,applyMiddleware(thunkMiddleware))



function mapStateToProps(state) {
     return {
         isLoading: state.isLoading,
         fields: state.person,
         people: state.people,
         saveStatus: state.saveStatus
     };
     }

function mapDispatchToProps(dispatch) {
     return {onSubmit: people => {
         dispatch(savePeople(people));
         }
     };
    }

    const ReduxForm=connect(mapStateToProps,mapDispatchToProps)(Form)

componentDidMount(){
    store.dispatch(fetchPeople())
}