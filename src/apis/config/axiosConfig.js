import api from './axiosInstance';
import { accessTokenHandler } from './requestInterceptors';
import { refreshTokenHandler } from './responseInterceptors';

api.interceptors.request.use(
	(config) => accessTokenHandler(config),
	(error) => Promise.reject(error)
);

api.interceptors.response.use(undefined, (error) => {
	return refreshTokenHandler(error);
});
