interface MovieDetailsProps {
  detailedMovie: {
    year: string;
    runtime: string;
    director: string;
    cast: string[];
    description: string;
    
  };
}
const MovieDetails: React.FC<MovieDetailsProps> = ({ detailedMovie }) => {

  // Destructure the props
  if (!detailedMovie) return null;
  const { year, runtime, director, cast, description } = detailedMovie;

  return (
    <div>
      <div className='row pb-4'>
        <div className='col-12'>
          {/* // Render the movie details */}
          <div>
            {year} | {runtime} | {director}
          </div>
          Cast:{' '}

          {/* // Map over the cast and render each person */}
          {cast.map((person: string, idx: number) => {
            if (idx === cast.length - 1) {
              return <span key={idx}>{person}</span>;
            } else {
              return <span key={idx}>{person}, </span>;
            }
          })}
        </div>
      </div>
      <div className='row'>

        {/* // Render the movie description */}
        <div className='col-12'>Movie Description: {description}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
