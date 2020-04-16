import {
  UPDATE_PACKAGE_CREATE_PROPS,
  ATTEMPT_PACKAGE_CREATE,
  PACKAGE_CREATE_SUCCESS,
  PACKAGE_CREATE_FAILED,
} from './actionType';
import Axios from 'axios';
import {PACKAGE_CREATE_API, getStorageParams} from '../constant';

export const updatePackageCreateProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_PACKAGE_CREATE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const packageCreateAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_PACKAGE_CREATE});
    return Axios.post(PACKAGE_CREATE_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: PACKAGE_CREATE_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: PACKAGE_CREATE_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });
