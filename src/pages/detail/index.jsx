import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Detail Page</h1>
    </div>
  );
};

export default Detail;
