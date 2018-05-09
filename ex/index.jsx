import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'

import { combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
    field: () => ({ value: 'Olá'})
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="Ola"/>
    </Provider>
    , document.getElementById('app'))