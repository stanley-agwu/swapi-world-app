import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getMovieQuery } from '../queries/queries';

class MovieDetails extends Component {
    displayMovieDetails(){
        const { movie } = this.props.data;
        if(movie){
            return(
                <div id="display-details">
                    <h2>{ movie.name }</h2>
                    <p><span>Genre:</span> { movie.genre }</p>
                    <p><span>Year:</span> { movie.year }</p>
                    <p><span>Stars:</span> { movie.star_actors }</p>
                    <p><span>Director:</span> { movie.director.name }</p>
                    <p><span>All movies by this director:</span></p>
                    <ul className="other-movies">
                        { movie.director.movies.map(item => {
                            return <li key={item.id}>{ item.name }</li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return( <div>No movie selected...</div> );
        }
    }
    render(){
        return(
            <div id="movie-details">
                { this.displayMovieDetails() }
            </div>
        );
    }
}

export default graphql(getMovieQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.movieId
            }
        }
    }
})(MovieDetails);
