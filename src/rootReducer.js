// going to collect all of our reducers and turn them into one reducer 
import { combineReducers } from 'redux';

import toggle from './toggle/reducer';
import movies from './movies/reducer';

const rootReducer = combineReducers({
    toggle,
    movies
});

export default rootReducer; 