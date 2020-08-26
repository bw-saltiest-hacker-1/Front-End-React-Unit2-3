import React from 'react'

function Comments(props) {
    return (
        <div>
            <h3>{props.item.username}</h3>
            <p>{props.item.troll}</p>
            <p>{props.item.comment}</p>
        </div>
    )
}

export default Comments