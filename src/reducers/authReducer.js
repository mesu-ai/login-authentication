import { getAccessToken, removeAccessToken, removeRefreshToken } from '../utils/cookies';

/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
export const types = {
	SET_AUTH_TOKEN: 'SET_AUTH_TOKEN',
	REMOVE_AUTH_TOKEN: 'REMOVE_AUTH_TOKEN',
};

export const initialState = getAccessToken() || '';

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_AUTH_TOKEN:
			return (state = action.payload);

		case types.REMOVE_AUTH_TOKEN:
			return (state = '');

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

export const setAuthToken = (payload = '') => {
	return { type: types.SET_AUTH_TOKEN, payload };
};

export const removeAuthToken = () => {
	const lang = localStorage.getItem('language');

	removeAccessToken();
	removeRefreshToken();

	if (lang) {
		localStorage.setItem('language', lang);
	}

	return { type: types.REMOVE_AUTH_TOKEN };
};
