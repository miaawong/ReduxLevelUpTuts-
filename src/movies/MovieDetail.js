import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './movie';
import Overdrive from 'react-overdrive';
// poster path 
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
    state = {
        movie: {},
    }

    async componentDidMount() {
        try {
            // await = fetch but wait until all info is returned
            // api url
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=1d9e2c235fdabdd02febb64fd3ff7db9&language=en-US`);
            // need to make sure entire data is here
            const movie = await res.json();
            console.log(movie);
            this.setState({
                movie,
            });
            // to catch error
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { movie } = this.state;

        // inline conditionals
        // let detail = 'hi';
        // if (this.state.movie.title) {
        //     detail = "hello";
        // }
        return (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                <MovieInfo>
                    <Overdrive id={`$[movie.id}`}>
                        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
                    </Overdrive>
                    <div>
                        {/* inline ternary with */}
                        {this.state.movie.title ? (
                            <h1> hello </h1>
                        ) : (
                                <h1>bye</h1>
                            )
                        }
                        <h1>{movie.title}</h1>
                        <h3>{movie.release_date}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>
        );
    }
}


export default MovieDetail;

const MovieWrapper = styled.div`
    position: relative; 
    background: url(${props => props.backdrop}) no-repeat; 
    padding-top: 50vh; 
    background-size: cover; 

`;

const MovieInfo = styled.div`
    background: white; 
    text-align: left; 
    padding: 2rem 10%; 
    display: flex; 
    > div { 
        margin-left: 20px; 
    }
    img { 
        position: relative; 
        top: -5rem; 
    }
`; 