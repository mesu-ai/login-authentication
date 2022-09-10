import { getAccessToken } from '../../utils/cookies';

export const accessTokenHandler = async (config) => {
	const token = getAccessToken();

	if (token) {
		// eslint-disable-next-line no-param-reassign
		config.headers = {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		};
	}

	return config;
};
