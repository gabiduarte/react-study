import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'

import { combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import FieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="Ola"/>
    </Provider>
    , document.getElementById('app'))