import { gql } from 'apollo-boost';

const getDirectorsQuery = gql`
    {
        directors {
            name
            id
        }
    }
`;

const getMoviesQuery = gql`
    {
        movies {
            name
            id
        }
    }
`;

const addMovieMutation = gql`
    mutation AddMovie($name: String!, $genre: String!, $year: Int!,
        $star_actors: String!, $directorId: ID!){
        addBook(name: $name, genre: $genre, year: $year, 
            star_actors: $star_actors, directorId: $directorId){
            name
            id
        }
    }
`;

const getMovieQuery = gql`
    query GetMovie($id: ID){
        movie(id: $id) {
            id
            name
            genre
            year
            star_actors
            director {
                id
                name
                age
                nationality
                movies {
                    name
                    id
                }
            }
        }
    }
`;

export { getDirectorsQuery, getMoviesQuery, addMovieMutation, getMovieQuery };
