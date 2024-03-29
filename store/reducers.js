const initialState = {
    authToken: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                authToken: action.authToken
            }
        case 'LOGOUT':
            return {
                ...initialState
            }
        default:
            return state
    }
}