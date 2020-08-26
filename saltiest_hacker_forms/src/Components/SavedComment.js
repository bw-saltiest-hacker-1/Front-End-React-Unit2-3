import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { fetchSavedPosts } from '../actions'

function SavedComment(props) {
    console.log(props)
    // useEffect(() => {
    //     props.fetchSavedPosts()
    // }, [])

    return (
        <div>
            <h4>{props.data.troll}</h4>
            <p>{props.data.tox}</p>
            <p>{props.data.comment}</p>
            <button onClick={() => props.delete(props.data)}>Delete</button>
        </div>
    )
}

// const mapStateToProps = state => ({ savedPosts: state.userReducer.savedPosts })

export default SavedComment