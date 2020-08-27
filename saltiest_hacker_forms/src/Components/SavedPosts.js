import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchSavedPosts, deletePost } from '../actions/'
import SavedComment from './SavedComment'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
// import axiosWithAuth from '../Utils/axiosWithAuth'

function SavedPosts(props) {
    const history = useHistory()
    const token = localStorage.getItem('token')
    //action for fetching user's saved posts
    useEffect(() => {
        props.fetchSavedPosts()
    }, [])

    const style = {
        display: 'block',
        margin: 'auto'
    }

    const handleDelete = item => {
        console.log('clicked handle delete')
        console.log(item)
        console.log(props.savedPosts)
        const newList = props.savedPosts.filter(n => n.id !== item.id)
        // make action creator for a delete request
        const finalData = { data: newList }
        props.deletePost(finalData)
        setTimeout(() => {
            history.go(0)
        }, 1000)
    }

    const savedList = props.savedPosts.map(item => <SavedComment delete={handleDelete} key={item.id} data={item} />)


    return (
        <div>
            {token && <button style={style}><Link to='/'>Home</Link></button>}
            {savedList}
        </div>
    )
}

//retrieve props from the userReducer reducer
const mapStateToProps = state => ({
    user: state.userReducer.user,
    savedPosts: state.userReducer.savedPosts
})

SavedComment.defaultProps = {
    data: []
}

export default connect(mapStateToProps, { fetchSavedPosts, deletePost })(SavedPosts)