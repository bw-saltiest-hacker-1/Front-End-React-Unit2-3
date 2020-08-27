// 8/25 @ 10:45pm:
//**created action creators for fetching the dashboard data and the comments the user has saved.
//**for now, using jsonBlob for dummy data, but API will change how we dispatch data in the actions.
//**To save data to a user's saved history, we will need to understand how the server handles a PUT request.
//We will also need to know what the PUT route expects as the second argument.
// **We need to handle authentication on the login and register page.

//8/26 @ 5:26pm:
//still need the Create and Update dummy operations

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchingData } from '../actions'
import Comments from './Comments'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Dashboard({ fetchingData, posts }) {
    const token = localStorage.getItem('token')
    //upon mounting, will fetch latests posts to render to home screen
    useEffect(() => {
        fetchingData()
    }, [])

    const style = {
        display: 'block',
        margin: "auto"
    }

    return (
        <div>
            {token && <button style={style}><Link to='/savedposts'>Saved Posts</Link></button>}
            <Comments data={posts} />
        </div>
    )
}

const mapStateToProps = state => ({ posts: state.postsReducer.posts })

export default connect(mapStateToProps, { fetchingData })(Dashboard)