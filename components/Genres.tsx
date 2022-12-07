import GenreRows from './GenreRows';
import genreData from '../public/genres.json';

import { MovieData } from './GenreRows';
interface IGenresProps {
  movies: MovieData[];
}
const Genres: React.FC<IGenresProps> = ({ movies }) => {
  // Get the list of genres from the genreData
  const { genreList } = genreData;
  return (
    <>
      {/*  Map over the genres and render a GenreRows component for each one */}
      {genreList.map((genre: string, idx: number) => (
        <GenreRows key={idx} movies={movies} genre={genre} />
      ))}
    </>
  );
};

export default Genres;
