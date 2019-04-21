/* eslint */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

// poster path 
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
// a functional stateless component
const Movie = ({ movie }) => (
    // passing a numerical id of id, you have to pass it in the form of string {`${movie.id}`}
    <Link to={`${movie.id}`}>
        <Overdrive id={`${movie.id}`}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
        </Overdrive>
    </Link>
);
export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
    // desc: PropTypes.string
};

export const Poster = styled.img`
    box-shadow: 0 0 35px black;  
`;
