import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchingData } from '../actions'
import Comments from './Comments'

function Dashboard({ fetchingData, posts }) {

    useEffect(() => {
        fetchingData()
    }, [])


    const cards = posts.map(item => <Comments key={item.id} item={item} />)

    return (
        <div>
            {cards}
        </div>
    )
}

const mapStateToProps = state => ({ posts: state.postsReducer.posts })

export default connect(mapStateToProps, { fetchingData })(Dashboard)