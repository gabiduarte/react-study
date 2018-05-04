import React from 'react'

function passPropsToChildren(children, props) {
    return React.Children.map(props.children, child => React.cloneElement(child, {...props}))
}

export { passPropsToChildren } 