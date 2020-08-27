import React from 'react'
import { Container, Header, T, P, Button2, Icon } from '../Styles/styled'

function Comment(props) {

    return (
        <Container>
            <Header>{props.item.troll}</Header>
            <T><Icon src='https://i.imgur.com/jYM0tRD.png' />{props.item.tox}</T>
            <P>{props.item.comment}</P>
            <Button2 onClick={() => props.click(props.item)}>Save</Button2>
        </Container>
    )
}

export default Comment