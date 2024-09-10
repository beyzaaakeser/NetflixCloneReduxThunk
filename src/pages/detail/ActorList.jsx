import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { imageURL } from '../../utils/constants';

const ActorList = ({ actors }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg md:text-xl">Actors and Actresses</h2>
      <Splide options={{ autoWidth: true, gap: '10px', pagination: false }}>
        {actors.map((actor, index) => (
          <SplideSlide key={index}>
            <div className="w-[120px] h-[250px] ">
              {' '}
              <img
                className="rounded w-full h-[200px] object-cover m-auto"
                src={
                  actor.profile_path
                    ? imageURL + actor.profile_path
                    : '/public/assets/noimage2.png'
                }
                alt=""
              />
              <h2 className="text-center  ">
                {actor.original_name}
              </h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ActorList;
