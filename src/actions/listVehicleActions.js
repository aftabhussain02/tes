import Axios from 'axios';
import {
  getStorageParams,
  GET_VEHICLE_LIST,
  DELETE_VEHICLE_API,
} from '../constant';
import {
  LIST_VEHICLE_SUCCESS,
  ATTEMPT_LIST_VEHICLE,
  LIST_VEHICLE_FAILED,
  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_FAILED,
} from './actionType';

export const listVehicle = () => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_LIST_VEHICLE});
    Axios.get(GET_VEHICLE_LIST + '/karteek', {headers})
      .then(s => {
        dispatch({type: LIST_VEHICLE_SUCCESS, payload: s.data});
      })
      .catch(e => {
        dispatch({
          type: LIST_VEHICLE_FAILED,
          payload: e.response.data ? e.response.data : e,
        });
      });
  });

export const deleteVehicleAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_LIST_VEHICLE});
    return Axios.put(DELETE_VEHICLE_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: DELETE_VEHICLE_SUCCESS,
          payload: s,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: LIST_VEHICLE_FAILED,
          payload: e.response.data ? e.response.data : e,
        });
        return Promise.reject(e);
      });
  });
