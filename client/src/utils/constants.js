export const HOST = import.meta.env.VITE_SERVER_URL;
export const AUTH_ROUTES = "api/auth";
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
// export const GET_USER_INFO = `${AUTH_ROUTES}/user-info`;
export const UPDATE_USER_INFO = `${AUTH_ROUTES}/update-user-info`;
export const PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/add-profile-image`;
export const DELETE_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/delete-profile-image`;
export const GET_USER_INFO = '/api/auth/user-info';
export const GET_ADMIN_INFO = '/api/admin/admin-info';
export const LOGOUT = `${AUTH_ROUTES}/logout`;