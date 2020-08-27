import React from 'react'


function Comment(props) {
    const style = {
        border: '1px solid black',
        margin: '1%'
    }

    return (
        <div style={style}>
            <h4>{props.item.author}</h4>
            <p>{props.item.tox}</p>
            <p>{props.item.text}</p>
            <button onClick={() => props.click(props.item)}>Save</button>
        </div>
    )
}

export default Comment