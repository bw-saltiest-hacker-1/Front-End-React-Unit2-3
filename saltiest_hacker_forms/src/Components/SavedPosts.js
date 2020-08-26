import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import axios from 'axios'
import { fetchSavedPosts } from '../actions/'

import Comments from './Comments'

function SavedPosts(props) {

    const [posts, setPosts] = useState([])

    //action for fetching user's saved posts
    useEffect(() => {
        props.fetchSavedPosts()
    }, [])

    const savedList = props.savedPosts.map(item => <Comments key={item.id} item={item} />)

    return (
        <div>
            {savedList}
        </div>
    )
}

//retrieve props from the userReducer reducer
const mapStateToProps = state => ({
    user: state.userReducer.user,
    savedPosts: state.userReducer.savedPosts
})

export default connect(mapStateToProps, { fetchSavedPosts })(SavedPosts)