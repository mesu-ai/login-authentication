import Cookies from 'universal-cookie';

export const cookies = new Cookies();

export const setAccessToken = (token, opts = {}) => cookies.set('access-token', token, opts);
export const setRefreshToken = (token, opts = {}) => cookies.set('refresh-token', token, opts);

export const getAccessToken = () => cookies.get('access-token');
export const getRefreshToken = () => cookies.get('refresh-token');

export const removeAccessToken = () => cookies.remove('access-token');
export const removeRefreshToken = () => cookies.remove('refresh-token');

export default cookies;
