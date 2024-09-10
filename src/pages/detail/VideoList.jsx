import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import ReactPlayer from 'react-player';

const VideoList = ({ videos }) => {
 
  return (
    <div className="my-5">
      <h2 className="font-semibold text-lg md:text-xl my-5 ">Trailers</h2>
      <Splide options={{ pagination: false }}>
        {videos.map((video, index) => (
          <SplideSlide key={index}>
            <div className="w-full h-[40vh] md:h-[50vh]">
              <ReactPlayer
                width={'100%'}
                height={'100%'}
                controls
                url={`https://www.youtube.com/watch?v=${video?.key}`}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default VideoList;
