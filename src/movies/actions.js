//ACTION CREATOR

// prevent typo bugs , because if toggle_message is a string, 
//if you had a typo, it won't give u an error 

export const GET_MOVIES = 'GET_MOVIES';

export function getMovies() {
    return async function (dispatch) {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=1d9e2c235fdabdd02febb64fd3ff7db9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
        const movies = await res.json();
        return dispatch({
            type: 'GET_MOVIES',
            data: movies.results,
        });
    };
}