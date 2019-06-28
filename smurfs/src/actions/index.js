import axios from 'axios';
// action types
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

// action creators

export function getSmurfs() {
  return (dispatch) => {
    dispatch({ type: GET_SMURFS });

    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: GET_SMURFS_FAILURE, payload: err.message })
      })
  }
}

export function addSmurf(smurf) {
  return (dispatch) => {
    dispatch({ type: ADD_SMURF })

    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: ADD_SMURF_FAILURE, payload: err.message })
      })
  }
}

export function killSmurf(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_SMURF })

    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: DELETE_SMURF_FAILURE, payload: err.message })
      })
  }
}
