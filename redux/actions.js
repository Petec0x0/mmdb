// Actions
export const LOAD_ALL_SCREEN_DATA = 'LOAD_ALL_SCREEN_DATA';
export const LOAD_MOVIES_SCREEN_DATA = 'LOAD_MOVIES_SCREEN_DATA';
export const LOAD_TV_SCREEN_DATA = 'LOAD_TV_SCREEN_DATA';
export const IS_LOADING = 'IS_LOADING';
export const LOADED = 'LOADED';


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
            liked: (object.id in favourites)
        }}
    });

    dispatch(loaded({screen:'allHomeScreen', data: dataObj}));
    // console.log(results);
    
}

export const loadMoviesScreenData = () => dispatch => {

}

export const loadTvScreenData = () => dispatch => {

}

export const isloading = (screen) => ({
    type: IS_LOADING,
    payload: screen
})

export const loaded = (payload) => ({
    type: LOADED,
    payload: payload
}) 