import React, { PureComponent } from 'react';
import Movie from './movie';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from './actions';

class MoviesList extends PureComponent {
    componentDidMount() {
        // technically firing dispatch 
        const { getMovies, isLoaded } = this.props;
        // to prevent getMovies to keep on hitting the API call after going to a detail page 
        if (!isLoaded) {
            getMovies();
        }
    }


    render() {
        const { movies, isLoaded } = this.props;
        return (
            <MovieGrid>
                {movies.map(movie => <Movie key={`${movie.id}`} movie={movie} />)}
            </MovieGrid>
        );
    }
}


const mapStateToProps = (state) => ({
    // taking our state and mapping it to a prop, which gets passed into our component
    // bring in from our state, from our movies obj, from movies array, to movies props. 
    movies: state.movies.movies,
    isLoaded: state.movies.moviesLoaded,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    // toggleMessage is set to props and binding u with dispatch 
    getMovies
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

// styled components 
const MovieGrid = styled.div`
    display: grid; 
    padding: 1rem; 
    grid-template-columns: repeat(6, 1fr); 
    grid-row-gap: 1rem; 
`; 