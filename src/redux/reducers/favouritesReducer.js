import ActionTypes from '../actionTypes';

const initialState = {
  favorites: [],
  isLoading: true,
  error: null,
};

const favouritesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FAV_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.FAV_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.FAV_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export default favouritesReducer;
