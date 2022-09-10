export const formatError = (error) => {
	if (error?.response?.data?.message) {
		return error.response.data.message;
	}

	return error.message;
};
