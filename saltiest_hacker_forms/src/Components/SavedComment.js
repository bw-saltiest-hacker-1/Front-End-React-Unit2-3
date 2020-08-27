import React from 'react'
import { Container, Header, T, P, Button2 } from '../Styles/styled'
// import { connect } from 'react-redux'
// import { fetchSavedPosts } from '../actions'

function SavedComment(props) {
    // console.log(props)
    // useEffect(() => {
    //     props.fetchSavedPosts()
    // }, [])

    return (
        <Container>
            <Header>{props.data.troll}</Header>
            <T onClick={() => props.click(props.data)}>{props.data.tox}</T>
            <P>{props.data.comment}</P>
            <Button2 onClick={() => props.delete(props.data)}>Delete</Button2>
        </Container>
    )
}

// const mapStateToProps = state => ({ savedPosts: state.userReducer.savedPosts })

export default SavedComment