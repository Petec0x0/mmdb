import { IS_LOADING, LOADED } from "../actions";

const intialState = {
    allHomeScreen: {
        data: {}
    },
    moviesHomeScreen: {},
    tvHomeScreen: {},
    status: {
        allHomeScreen: 'idle',
        moviesHomeScreen: 'idle',
        tvHomeScreen: 'idle'
    },
    favourites: {}
}

export default rootReducer = (state = intialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                status: {
                    ...state.status,
                    [action.payload]: 'loading'
                }
            }
        case LOADED:
            return {
                ...state,
                [action.payload.screen]: {
                    data: {...action.payload.data}
                },
                status: {
                    ...state.status,
                    [action.payload.screen]: 'loaded'
                }
            }
        default:
            return state;
    }
}