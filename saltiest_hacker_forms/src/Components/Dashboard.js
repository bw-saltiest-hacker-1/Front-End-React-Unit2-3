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

    const initialState = {
        troll: '',
        toxicity: '',
        comment: '',
        id: ''
    }

    const [save, setSave] = useState(initialState)

    //handle click for when a user saves a comment
    //dummy data is saving the comment object to state,
    //creating a new object with a property called 'data' that holds the array
    //the array contains the single saved comment object
    //gets saved into a dummy API for now
    //will probably use action creators to save data to DB, depending on what the API returns back
    const handleClick = item => {
        setSave(item)
        const post = {
            data: [item]
        }
        axios.put('https://jsonblob.com/api/jsonblob/26722cad-e72e-11ea-bdf5-672ff27d5abd', post)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    //upon mounting, will fetch latests posts to render to home screen
    useEffect(() => {
        fetchingData()
    }, [])

    //click prop will pass down function that saves comment object to users saved posts
    const cards = posts.map(item => <Comments click={handleClick} key={item.id} item={item} />)

    return (
        <div>
            {cards}
        </div>
    )
}

const mapStateToProps = state => ({ posts: state.postsReducer.posts })

export default connect(mapStateToProps, { fetchingData })(Dashboard)