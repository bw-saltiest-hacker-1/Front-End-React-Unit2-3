import axios from 'axios'

//res.data returns an object with a data property.  The data prop is an array of comment
//objects.  This data structure could change depending on the API
export const fetchingData = param => dispatch => {
    axios.get('https://jsonblob.com/api/jsonblob/824df1e3-e636-11ea-b735-85daf3898380')
        .then(res => {
            dispatch({ type: 'FETCHED_DATA', payload: res.data.data })
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