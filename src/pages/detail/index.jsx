import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiArrowLeftSLine } from 'react-icons/ri';
import api from '../../utils/api';
import Error from '../../components/error';
import Loader from '../../components/loader';
import Banner from './Banner';
import Content from './Content';
import ActorList from './ActorList';
import VideoList from './VideoList';
import Button from './Button';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = {
      append_to_response: 'credits,videos',
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <Error info={error.message} />;
  if (!movie) return <Loader />;

  return (
    <div>
      <div>
        <div className="mb-5 flex justify-between">
          <Link
            to={'..'}
            className="bg-gray-600 py-2 px-4 rounded hover:bg-gray-500 transition flex justify-center items-center"
          >
            <RiArrowLeftSLine className="font-semibold text-xl" />
            Undo
          </Link>{' '}
          <Button movie={movie} />
        </div>

        <Banner movie={movie} />
        <Content movie={movie} />
        <ActorList actors={movie.credits.cast} />
        <VideoList videos={movie.videos.results} />
      </div>
    </div>
  );
};

export default Detail;
