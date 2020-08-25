import React from 'react'

function Comments(props) {
    console.log(props.item)
    return (
        <div>
            <h4>{props.item.username}</h4>
            <p>{props.item.troll}</p>
            <p>{props.item.comment}</p>
        </div>
    )
}

export default Comments