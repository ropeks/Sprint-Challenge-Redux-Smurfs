import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export function smurfsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SMURFS:
      return {...state, fetchingSmurfs: true};
    case GET_SMURFS_SUCCESS:
      return {...state, smurfs: action.payload, fetchingSmurfs: false};
    case GET_SMURFS_FAILURE:
      return {...state, error: action.payload, fetchingSmurfs: false};

    case ADD_SMURF:
      return {...state, addingSmurf: true};
    case ADD_SMURF_SUCCESS:
      return {...state, smurfs: action.payload, addingSmurf: false}
    case ADD_SMURF_FAILURE:
      return {...state, error: action.payload, addingSmurf: false}
    
    default:
      return state;
  }
}
