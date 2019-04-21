import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

import logo from './logo.svg';
import './App.css';

import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';
import Toggle from './toggle/Toggle';

const middleware = [logger, thunk];

//REDUCER
// const hello = () => ('hai');
//STORE
const store = createStore(
    //reducer
    rootReducer,
    // initial state
    {},
    // middleware 
    // applyMiddleware accepts your middlewares 
    composeWithDevTools(applyMiddleware(...middleware)),
);
const App = () => (
    //PROVIDER accepts 2 things: store and it's children 
    <Provider store={store}>
        <Router>
            <div className="App">
                <header className="App-header">
                    {/* no refresh and jumps back to home page  */}
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                </header>
                <Toggle />
                <Switch>
                    <Route exact path="/" component={MoviesList} />
                    <Route path="/:id" component={MovieDetail} />
                </Switch>
            </div>
        </Router>
    </Provider>

);

export default App;

