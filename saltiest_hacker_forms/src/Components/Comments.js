import React, { useState } from 'react'
import axios from 'axios'
import Comment from './Comment'
import { connect } from 'react-redux'
import { fetchSavedPosts, savePost } from '../actions'

function Comments(props) {
    // console.log(props)
    const initialState = {
        author: '',
        tox: '',
        text: '',
        id: ''
    }

    const [save, setSave] = useState(initialState)
    const [posts, setPosts] = useState([])

    React.useEffect(() => {
        fetchSavedPosts()
    }, [props])

    //handle click for when a user saves a comment
    //dummy data is saving the comment object to state,
    //creating a new object with a property called 'data' that holds the array
    //the array contains the single saved comment object
    //gets saved into a dummy API for now
    //will probably use action creators to save data to DB, depending on what the API returns back
    async function handleClick(item) {
        console.log(item)
        console.log(props.savedPosts)
        const newData = await axios.get('https://jsonblob.com/api/jsonblob/https://jsonblob.com/api/jsonblob/26722cad-e72e-11ea-bdf5-672ff27d5abd')
            .then(res => {
                return res.data.data
            })
            .catch(err => {
                return err.message
            })
        console.log(newData)
        const finalData = {
            data: [item, ...newData]
        }
        props.savePost(finalData)
    }

    //click prop will pass down function that saves comment object to users saved posts
    const cards = props.data.map(item => <Comment click={handleClick} key={item.id} item={item} />)

    return (
        <>
            {cards}
        </>
    )
}

Comments.defaultProps = {
    data: []
}

const mapStateToProps = state => ({ user: state.userReducer.user, savedPosts: state.userReducer.savedPosts })

export default connect(mapStateToProps, { fetchSavedPosts, savePost })(Comments)