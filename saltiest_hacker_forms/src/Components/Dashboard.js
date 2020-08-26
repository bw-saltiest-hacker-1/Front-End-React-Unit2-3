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
    const handleClick = item => {
        setSave(item)
        axios.put('https://jsonblob.com/api/jsonblob/26722cad-e72e-11ea-bdf5-672ff27d5abd', item)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchingData()
    }, [])


    const cards = posts.map(item => <Comments click={handleClick} key={item.id} item={item} />)

    return (
        <div>
            {cards}
        </div>
    )
}

const mapStateToProps = state => ({ posts: state.postsReducer.posts })

export default connect(mapStateToProps, { fetchingData })(Dashboard)