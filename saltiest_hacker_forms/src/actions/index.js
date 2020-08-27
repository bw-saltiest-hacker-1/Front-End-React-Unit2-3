import axios from 'axios'

//res.data returns an object with a data property.  The data prop is an array of comment
//objects.  This data structure could change depending on the API
export const fetchingData = param => dispatch => {
    axios.get('https://salty-hacker-1-bw.herokuapp.com/api/data')
        .then(res => {
            console.log(res)
            dispatch({ type: 'FETCHED_DATA', payload: res.data })
        })
        .catch(error => {
            dispatch({ type: 'ERROR', payload: error.message })
        })
}

export const fetchSavedPosts = param => dispatch => {
    axios.get('https://jsonblob.com/api/jsonblob/26722cad-e72e-11ea-bdf5-672ff27d5abd')
        .then(res => {
            dispatch({ type: 'FETCHED_SAVED', payload: res.data.data })
        })
        .catch(err => {
            console.log(err)
        })
}

export const savePost = params => dispatch => {
    console.log("running save post action")
    axios.put('https://jsonblob.com/api/jsonblob/26722cad-e72e-11ea-bdf5-672ff27d5abd', params)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const deletePost = data => dispatch => {
    console.log("deploying delete post")
    axios.put('https://jsonblob.com/api/jsonblob/26722cad-e72e-11ea-bdf5-672ff27d5abd', data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}