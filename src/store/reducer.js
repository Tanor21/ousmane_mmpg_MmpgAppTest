const initialState = []

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'users/set':
            return { ...state, users: action.payload }
        default:
            return state
    }
}

export default usersReducer
