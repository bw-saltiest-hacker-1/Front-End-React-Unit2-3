import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 2px solid red;
`


function Comment(props) {

    return (
        <Container>
            <h4>{props.item.troll}</h4>
            <p>{props.item.tox}</p>
            <p>{props.item.comment}</p>
            <button onClick={() => props.click(props.item)}>Save</button>
        </Container>
    )
}

export default Comment