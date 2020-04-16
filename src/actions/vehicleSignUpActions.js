import {
  UPDATE_VEHICLE_SIGN_UP_PROPS,
  ATTEMPT_VEHICLE_SIGN_UP,
  VEHICLE_SIGN_UP_SUCCESS,
  VEHICLE_SIGN_UP_FAILED,
} from './actionType';
import Axios from 'axios';
import {
  VEHICLE_OWNER_API,
  getStorageParams,
  VEHICLE_OWNER_OTP_API,
} from '../constant';

export const updateVehicleSignUpProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_VEHICLE_SIGN_UP_PROPS,
  payload: {prop, value, isNotFormData},
});

export const vehicleSignupAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_VEHICLE_SIGN_UP});
    return Axios.post(VEHICLE_OWNER_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: VEHICLE_SIGN_UP_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: VEHICLE_SIGN_UP_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });

export const vehicleSignupOtpAction = otp =>
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

export const deleteVehicleOwner = () =>
  getStorageParams().then(({headers}) =>
    Axios.delete(VEHICLE_OWNER_API, {headers})
      .then(s => Promise.resolve(s))
      .catch(e => Promise.reject(e)),
  );
