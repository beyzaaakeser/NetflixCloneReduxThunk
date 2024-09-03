import React from 'react';
import DetailInfo from './DetailInfo';

const Content = ({ movie }) => {
  console.log(movie);
  return (
    <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
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
      <div>2</div>
    </div>
  );
};

export default Content;
