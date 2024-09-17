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

export const getFavorites = () => (dispatch) => {
  dispatch({ type: ActionTypes.FAV_LOADING });
  api
    .get('/account/21283936/favorite/movies')
    .then((res) => 
     dispatch({ type: ActionTypes.FAV_SUCCESS, payload: res.data.results }) 
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.FAV_ERROR, payload: err.message })
    );
};

export const toggleFavourite = (movie, isAdd) => (dispatch) => {
  api
    .post('/account/21283936/favorite', {
      media_type: 'movie',
      media_id: movie.id,
      favorite: isAdd,
    })
    .then(() =>
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_FAV, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FAV, payload: movie })
    )
    .catch((err) => dispatch({ type: ActionTypes.FAV_ERROR }));
};
