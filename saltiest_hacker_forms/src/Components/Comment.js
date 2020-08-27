import React from 'react'


function Comment(props) {
    const style = {
        border: '1px solid black',
        margin: '1%'
    }

    return (
        <div style={style}>
            <h4>{props.item.troll}</h4>
            <p>{props.item.tox}</p>
            <p>{props.item.comment}</p>
            <button onClick={() => props.click(props.item)}>Save</button>
        </div>
    )
}

export default Comment