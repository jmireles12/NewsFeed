import React from 'react'
import './TabForm.css'

export default function TabForm(props) {
    const { className, ...otherProps } = props
    return (
        <form
        className={['Tab-form', className].join(' ')}
        action='#'
        {...otherProps}
    />
    )
}