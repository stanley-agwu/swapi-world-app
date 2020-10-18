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
        $star_actor: String!, $directorId: ID!){
        addBook(name: $name, genre: $genre, year: $year, 
            star_actor: $star_actor, directorId: $directorId){
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
            star_actor
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
