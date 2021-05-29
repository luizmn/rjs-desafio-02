import './content.scss';
import { MovieCard } from '../../components/MovieCard';

export interface MovieListProps {
  movies: MovieProps[];
  selectedGenre: number;
}

export function Content({movies, selectedGenre}: MovieListProps) {
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  )
}