import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Comments from './Comments'

function SavedPosts(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonblob.com/api/jsonblob/26722cad-e72e-11ea-bdf5-672ff27d5abd')
            .then(res => {
                console.log(res)
                setPosts([res.data])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const savedList = posts.map(item => <Comments key={item.id} item={item} />)

    return (
        <div>
            {savedList}
        </div>
    )
}

export default SavedPosts