const initialState = {
    user: '',
    savedPosts: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHED_SAVED':
            return {
                ...state,
                savedPosts: action.payload
            }
        default:
            return state
    }
}