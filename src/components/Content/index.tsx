import './content.scss';
import { MovieCard } from '../../components/MovieCard';

export interface MovieListProps {
  movies: MovieProps[];
}

export function Content({movies}: MovieListProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}