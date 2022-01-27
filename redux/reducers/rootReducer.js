import { IS_LOADING, LOADED, MOVIE_LIKED } from "../actions";

const intialState = {
    allHomeScreen: {
        data: {}
    },
    moviesHomeScreen: {
        data: {}
    },
    tvHomeScreen: {
        data: {}
    },
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
        case MOVIE_LIKED:
            // Get the screen name and the particular movie 
            // to update from the payload
            const screenName = action.payload.screenName;
            const movie_id = action.payload.id
            return {
                ...state,
                favourites: {
                    ...updateFavourites(state.favourites, [movie_id])
                },
                [screenName]: {
                    ...state[screenName],
                    data: {
                        ...state[screenName].data,
                        [movie_id]: updateLikedMovie(state[screenName].data, movie_id)
                    }
                }
            }
        default:
            return state;
    }
}

const updateLikedMovie = (data, id) => {
    const newData = data[id];
    newData.liked = !newData.liked;
    return newData;
}

const updateFavourites = (favourites, id) => {
    const newFav = favourites;
    if(id in newFav){
        delete newFav[id];
        return newFav;
    }else{
        return {...newFav, [id]: true}
    }
}