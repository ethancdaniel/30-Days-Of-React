import React, { Component } from 'react';
export const DaysOfReact = (props) => {
    const { top, left} = props
    const style = {
        position: 'relative',
        top: top,
        left: left
    }
    console.log(style['top'])
    return <p className='days-of-react' style={style} onMouseMove={props.onMouseMove}>30 Days of React</p>
}