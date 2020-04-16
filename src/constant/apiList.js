export const API_PROTOCOL = 'http://';

export const API_DOMAIN = `${API_PROTOCOL}ec2-13-48-149-211.eu-north-1.compute.amazonaws.com:3000/`;

export const VEHICLE_OWNER_API = `${API_DOMAIN}vehicleowner`;

export const VEHICLE_OWNER_OTP_API = API_DOMAIN + 'vehicleowner/otp';

export const CREATE_VEHICLE_API = API_DOMAIN + 'vehicle/create';

export const DELETE_DRIVER = API_DOMAIN + 'driver/delete';

export const GET_VEHICLE_LIST = API_DOMAIN + 'vehicle';

export const VEHICLE_OWNER_LOGIN_API = API_DOMAIN + 'vehicleouser/signin';

export const UPDATE_VEHICLE_API = API_DOMAIN + 'vehicle/update';

export const DELETE_VEHICLE_API = API_DOMAIN + 'vehicle/delete';

const CUSTOMER_END_POINT = API_DOMAIN + 'customer';

export const CUSTOMER_SIGNUP_API = CUSTOMER_END_POINT + '/create';

export const CUSTOMER_OTP_API = CUSTOMER_END_POINT + '/otp';

export const CUSTOMER_DELETE_API = CUSTOMER_END_POINT + '/delete';

export const CUSTOMER_SIGN_IN_API = CUSTOMER_END_POINT + '/signin';

export const CUSTOMER_UPDATE_API = CUSTOMER_END_POINT + '/update';

export const PACKAGE_CREATE_API = CUSTOMER_END_POINT + 'package/create';
