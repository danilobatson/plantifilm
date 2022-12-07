import Image from 'next/image';
import Link from 'next/link';

export interface MovieData {
  backdrop: string;
  cast: string[];
  classification: string;
  genres: string[];
  id?: number;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
}
interface GenreRowsProps {
  genre: string;
  movies: MovieData[];
}

const GenreRows: React.FC<GenreRowsProps> = ({ genre, movies }) => {
  // Filter the movies to only include the ones in the genre
  const correctGenre = movies.filter((movie: MovieData) =>
    movie.genres.includes(genre)
  );

  // If there are no movies in the genre, don't render anything
  if (correctGenre.length === 0) {
    return;
  }

  return (
    <div className='row pb-5'>
      {/* Render the genre name */}
      <h2 className='text-start'>{genre}</h2>

      <div className='col-12'>
        <div className='list-group list-group-horizontal overflow-auto'>
          {/*  Map over the movies in the genre and render a link to the movie detail page */}
          {correctGenre.map((movie: MovieData) => {
            return (
              <Link
                href={`/detail/${movie.id}`}
                key={movie.id}
                style={{ width: '15rem' }}
              >
                <Image
                  alt='Movie Poster Image'
                  src={movie.poster}
                  width={1200}
                  height={400}
                  className='px-2'
                  style={{
                    width: 'auto',
                    maxHeight: '15rem',
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GenreRows;
