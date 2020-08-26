import React, { useState } from 'react'

function Comments(props) {
    const style = {
        border: '1px solid black',
        margin: '1%'
    }

    return (
        <div style={style}>
            <h4>{props.item.troll}</h4>
            <p>{props.item.toxicity}</p>
            <p>{props.item.comment}</p>
            <button onClick={() => props.click(props.item)}>Save</button>
        </div>
    )
}

export default Comments