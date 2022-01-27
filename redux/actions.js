// Actions
export const LOAD_ALL_SCREEN_DATA = 'LOAD_ALL_SCREEN_DATA';
export const LOAD_MOVIES_SCREEN_DATA = 'LOAD_MOVIES_SCREEN_DATA';
export const LOAD_TV_SCREEN_DATA = 'LOAD_TV_SCREEN_DATA';
export const IS_LOADING = 'IS_LOADING';
export const LOADED = 'LOADED';
export const MOVIE_LIKED = 'MOVIE_LIKED';


// Action Creators
export const loadAllScreenData = () => async (dispatch, getState) => {
    dispatch(isloading('tvHomeScreen'));
    const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=70744832195ce0e5cdef664f92eba840';
    const response = await fetch(url);
    const json = await response.json();
    const results = await json.results;
    
    // Check if some data exists in the favourites already
    const favourites = getState().favourites;

    let dataObj = {};
    const data = await results.map(object => {
        dataObj = {...dataObj, [object.id]: {
            id: object.id,
            original_title: object.original_title || object.name,
            poster_path: object.poster_path,
            rating: object.vote_average,
            liked: (object.id in favourites),
            media_type: object.media_type
        }}
    });

    dispatch(loaded({screen:'allHomeScreen', data: dataObj}));    
}

export const loadMoviesScreenData = () => (dispatch, getState) => {
    dispatch(loaded({screen:'moviesHomeScreen', data: {}}));
}

export const loadTvScreenData = () => (dispatch, getState) => {
    dispatch(loaded({screen:'tvHomeScreen', data: {}}));
}

// An action creator for dispatching that 
// the screen is currently loading
export const isloading = (screen) => ({
    type: IS_LOADING,
    payload: screen
})

// An action cretor for notifying the reducer
// that the data has loaded completely
export const loaded = (payload) => ({
    type: LOADED,
    payload: payload
}) 

// Action cretor for dispatching "Like Movie" action
export const likeMovie = (payload) => ({
    type: MOVIE_LIKED,
    payload: payload
})