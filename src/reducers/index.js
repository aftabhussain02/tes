import {combineReducers} from 'redux';
import vehicleSignUp from './vehicleSignUpReducer';
import createVehicle from './createVehicleReducer';
import listVehicle from './listVehicleReducer';
import vehicleOUpdate from './vehicleOwnerUpdateReducer';
import vehicleLogin from './vehicleOwnerLoginReducer';
import updateVehicle from './updateVehicleReducer';
import customerSignup from './customerSignUpReducer';
import customerSignIn from './customerSignInReducer';
import customerUpdate from './customerUpdateReducer';
import customerDelete from './customerDeleteReducer';
import customerOtp from './customerOtpReducer';
import driverCreate from './driverCreateReducer';
import driverList from './driverListReducer';
import driverUpdate from './driverUpdateReducer';
import driverDelete from './driverDeleteReducer';
import packageCreate from './packageCreateReducer';

export default combineReducers({
  vehicleSignUp,
  createVehicle,
  listVehicle,
  vehicleOUpdate,
  vehicleLogin,
  updateVehicle,
  customerSignup,
  customerSignIn,
  customerUpdate,
  customerDelete,
  customerOtp,
  driverCreate,
  driverList,
  driverUpdate,
  driverDelete,
  packageCreate,
});
