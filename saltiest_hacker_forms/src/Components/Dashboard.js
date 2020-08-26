// 8/25 @ 10:45pm:
//**created action creators for fetching the dashboard data and the comments the user has saved.
//**for now, using jsonBlob for dummy data, but API will change how we dispatch data in the actions.
//**To save data to a user's saved history, we will need to understand how the server handles a PUT request.
//We will also need to know what the PUT route expects as the second argument.
// **We need to handle authentication on the login and register page.

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchingData } from '../actions'
import Comments from './Comments'

import axios from 'axios'

function Dashboard({ fetchingData, posts }) {

    //upon mounting, will fetch latests posts to render to home screen
    useEffect(() => {
        fetchingData()
    }, [])

    return (
        <div>
            <Comments data={posts} />
        </div>
    )
}

const mapStateToProps = state => ({ posts: state.postsReducer.posts })

export default connect(mapStateToProps, { fetchingData })(Dashboard)