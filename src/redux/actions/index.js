import api from '../../utils/api';
import ActionTypes from '../actionTypes';

export const getGenres = () => (dispatch) => {
  dispatch({ type: ActionTypes.GENRE_LOADING });
  api.get('/genre/movie/list').then((res) =>
    dispatch({
      type: ActionTypes.GENRE_SUCCESS,
      payload: res.data.genres,
    })
  ).catch((err) => dispatch({
    type: ActionTypes.GENRE_ERROR,
    payload: err.message,
  }))
};
