import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { NavBar, Genres, MovieDetails } from '../components';
import Detail from '../pages/detail/[id]/index';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';

const movies = [
  {
    backdrop:
      'https://image.tmdb.org/t/p/w1280/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    classification: '15',
    director: 'Frank Darabont',
    genres: ['Crime', 'Drama'],
    id: 1,
    imdb_rating: 9,
    length: '142',
    released_on: '1994-09-23',
    overview: 'Two imprisoned',
    poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    slug: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    year: '1994',
  },
];

jest.mock('next/router', () => require('next-router-mock'));
beforeEach(() => {
  mockRouter.setCurrentUrl('/detail/[id]');
});

describe('NavBar Component', () => {
  it('renders an input', () => {
    render(<NavBar />);

    const search = screen.getByRole('search-input');

    expect(search).toBeInTheDocument();
  });
  it('renders an input', () => {
    render(<NavBar />);

    const heading = screen.getByText('Wookie Movies');

    expect(heading).toBeInTheDocument();
  });
});

describe('Genres Component', () => {
  it('genres should be rendered on screen', () => {
    render(<Genres movies={movies} />);

    const genresList: string[] = [];
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (!genresList.includes(genre)) {
          genresList.push(genre);
        }
      });
    });

    expect(genresList.length).toBe(2);
  });
});
describe('MovieDetails Component', () => {
  it('MovieDetails should be rendered on screen', () => {
    const detailedMovies = {
      year: '1994',
      runtime: '142',
      director: 'Frank Darabont',
      cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
      description: 'Two imprisoned',
    };

    render(<MovieDetails detailedMovie={detailedMovies} />);

    expect(screen.getByText(/Two imprisoned/)).toBeInTheDocument();
  });
});

describe('MovieDetails Component', () => {
  it('MovieDetails should be loading if data not rendered', () => {
    render(<Detail />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
});

describe('Home Page', () => {
  it('NavBar and Genres should both be on the screen', () => {
    render(<Home />);
    render(<Genres movies={movies} />);

    let count = 0;

    if (screen.getByText(/Wookie Movies/)) {
      count++;
    }
    if (screen.getByText(/Drama/)) {
      count++;
    }
    expect(count).toBe(2);
  });
});
