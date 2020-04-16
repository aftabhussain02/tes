import {
  UPDATE_CUSTOMER_SIGN_UP_PROPS,
  ATTEMPT_CUSTOMER_SIGN_UP,
  CUSTOMER_SIGN_UP_SUCCESS,
  CUSTOMER_SIGN_UP_FAILED,
} from './actionType';
import Axios from 'axios';
import {
  CUSTOMER_SIGNUP_API,
  getStorageParams,
  VEHICLE_OWNER_OTP_API,
  CUSTOMER_DELETE_API,
} from '../constant';

export const updateCustomerSignUpProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_CUSTOMER_SIGN_UP_PROPS,
  payload: {prop, value, isNotFormData},
});

export const customerSignupAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_CUSTOMER_SIGN_UP});
    return Axios.post(CUSTOMER_SIGNUP_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: CUSTOMER_SIGN_UP_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: CUSTOMER_SIGN_UP_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });

export const customerSignupOtpAction = otp =>
  Axios.post(
    VEHICLE_OWNER_OTP_API,
    {otp},
    {
      Accept: 'application/json',
    },
  )
    .then(s => {
      return Promise.resolve(s);
    })
    .catch(e => {
      console.log(e.response.data);
      return Promise.reject(e);
    });

export const deleteCustomer = () =>
  getStorageParams().then(({headers}) =>
    Axios.delete(CUSTOMER_DELETE_API, {headers})
      .then(s => Promise.resolve(s))
      .catch(e => Promise.reject(e)),
  );
