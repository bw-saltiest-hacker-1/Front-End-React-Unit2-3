import axios from 'axios'

export const fetchingData = param => dispatch => {
    axios.get('https://jsonblob.com/api/jsonblob/824df1e3-e636-11ea-b735-85daf3898380')
        .then(res => {
            dispatch({ type: 'FETCHED_DATA', payload: res.data.data })
        })
        .catch(error => {
            dispatch({ type: 'ERROR', payload: error.message })
        })
}