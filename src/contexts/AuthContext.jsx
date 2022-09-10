import { createContext, useReducer } from 'react';

import { initialState, reducer } from '../reducers/authReducer';

export const AuthContext = createContext();

export const AuthProvider = ({ children = null }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { state, dispatch };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
