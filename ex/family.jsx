import React from 'react'
import {passPropsToChildren} from '../utils/reactUtils'

export default (props) => (
    <div>
        <h1>Família</h1>
        { passPropsToChildren(props.children, props) }
    </div>
)