import React from 'react';
import DetailInfo from './DetailInfo';

const Content = ({ movie }) => {
  console.log(movie);
  return (
    <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
      <div>
        <DetailInfo title="Categories" arr={movie?.genres} />
        <DetailInfo title="Spoken Languages" arr={movie?.spoken_languages} />
        <DetailInfo
          title="Production Companies"
          arr={movie?.production_companies}
        />
        <DetailInfo
          title="Production Countries"
          arr={movie?.production_countries}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>{movie.overview}</p>

        <p>
          <span>Budget:</span>
          <span className="text-green-500 font-semibold">
            {' '}
            ${movie.budget}
          </span>
        </p>

        <p>
          <span>Revenue: </span>
          <span className="text-green-500 font-semibold">${movie.revenue}</span>
        </p>
      </div>
    </div>
  );
};

export default Content;
