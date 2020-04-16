import {
  UPDATE_CUSTOMER_DELETE_PROPS,
  ATTEMPT_CUSTOMER_DELETE,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DELETE_FAILED,
} from './actionType';
import Axios from 'axios';
import {CUSTOMER_DELETE_API, getStorageParams} from '../constant';

export const updateCustomerDeleteProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_CUSTOMER_DELETE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const customerDeleteAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_CUSTOMER_DELETE});
    return Axios.post(CUSTOMER_DELETE_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: CUSTOMER_DELETE_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: CUSTOMER_DELETE_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });
