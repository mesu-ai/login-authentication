import axios from 'axios';
import toast from 'react-hot-toast';

import { i18n } from '../i18n/config';
import { getRefreshToken, setAccessToken, setRefreshToken } from '../utils/cookies';
import baseURL from './config/baseURL';

export const authAxiosInstance = axios.create({
	baseURL: `${baseURL}/api/v1/auth`,
	timeout: 10000,
});

const authAPI = {
	async fetchNewAccessToken() {
		const refresh = getRefreshToken();
		const response = await authAxiosInstance.post('/refresh/', { refresh });
		return response.data;
	},

	async registerOrSignUp(data) {
		const response = await authAxiosInstance.post('/register/', data, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});

		if ([200, 201].includes(response.status)) {
			toast.success(i18n.t('Successfully signed up'));
		}

		return response.data;
	},

	async fetchTokensOrSignIn(data) {
		const response = await authAxiosInstance.post('/login/', data);

		if ([200, 201].includes(response.status)) {
			const { access, full_name, group, profile_picture, refresh, user_id, user_mode } = response.data;

			localStorage.setItem('profile', JSON.stringify({ full_name, group, profile_picture, user_id, user_mode }));

			if (access && refresh) {
				setAccessToken(access, { path: '/' });
				setRefreshToken(refresh, { path: '/' });
			}

			toast.success(i18n.t('Successfully signed in'));
		}

		return response.data;
	},
};

export const { fetchNewAccessToken, fetchTokensOrSignIn, registerOrSignUp } = authAPI;

export default authAPI;
