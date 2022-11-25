export const API_BASE_URL = 'http://192.168.222.134:3000';
// export const API_BASE_URL = 'http://10.0.2.2:3000';

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const SIGNUP_API = getApiUrl('/User/signup');
export const GET_USERS = getApiUrl('/User/users');
export const VERIFY_OTP = getApiUrl('/User/otpVerify');