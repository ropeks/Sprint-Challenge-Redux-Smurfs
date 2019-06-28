import axios from 'axios';
// action types
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

// action creators

export function getSmurfs() {
  return (dispatch) => {
    dispatch({ type: GET_SMURFS });

    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err.message);
        dispatch({ type: GET_SMURFS_FAILURE, payload: err.message })
      })
  }
}
