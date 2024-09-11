import api from '../../utils/api';
import ActionTypes from '../actionTypes';

export const getGenres = () => (dispatch) => {
  dispatch({ type: ActionTypes.GENRE_LOADING });
  api
    .get('/genre/movie/list')
    .then((res) =>
      dispatch({
        type: ActionTypes.GENRE_SUCCESS,
        payload: res.data.genres,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRE_ERROR,
        payload: err.message,
      })
    );
};

export const addToFavourite = () => (dispatch) => {
  api
    .post('/account/21283936/favorite', {
      media_type: 'movie',
      media_id: 533535,
      favorite: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export const getFavorites = () => (dispatch) => {
  dispatch({ type: ActionTypes.FAV_LOADING });
  api
    .get('/account/21283936/favorite/movies')
    .then((res) =>
      dispatch({ type: ActionTypes.FAV_SUCCESS, payload: res.data.results })
    )
    .catch((err) => dispatch({ type: ActionTypes.FAV_ERROR, payload: err.message }));
};
