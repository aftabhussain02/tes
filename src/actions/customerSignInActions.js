import {
  UPDATE_CUSTOMER_SIGN_IN_PROPS,
  ATTEMPT_CUSTOMER_SIGN_IN,
  CUSTOMER_SIGN_IN_SUCCESS,
  CUSTOMER_SIGN_IN_FAILED,
} from './actionType';
import Axios from 'axios';
import {CUSTOMER_SIGN_IN_API, getStorageParams} from '../constant';

export const updateCustomerSignInProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_CUSTOMER_SIGN_IN_PROPS,
  payload: {prop, value, isNotFormData},
});

export const customerSignInAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_CUSTOMER_SIGN_IN});
    return Axios.post(CUSTOMER_SIGN_IN_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        console.log(s);
        dispatch({
          type: CUSTOMER_SIGN_IN_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        console.log(e);
        dispatch({
          type: CUSTOMER_SIGN_IN_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });
