const INITIAL_STATE = {
    search: '',
    limit: 10,
    offset:0,
    activePage: 1
}

const searchReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SEARCH_CHANGED':
            return { ...state, search: action.payload }
        case 'LIMIT_CHANGED':
            return { ...state, limit: action.payload }
        case 'SEARCH_CLEARED':
            return { ...state, search: action.payload }
        case 'OFFSET_CHANGED':
            return { ...state,
                    offset: action.payload.offset,
                    activePage: action.payload.activePage}
        default:
            return state
    }

}

export default searchReducer