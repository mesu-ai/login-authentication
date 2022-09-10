import axios from 'axios';
import baseURL from './config/baseURL';

export const cmsAxiosInstance = axios.create({
	baseURL: `${baseURL}/api/v1/cms`,
	timeout: 10000,
});

const cmsAPIs = {
	async fetchBanner() {
		const response = await cmsAxiosInstance.get('/banner');
		return response.data;
	},

	async fetchPartnerLogos() {
		const response = await cmsAxiosInstance.get('/partners');
		return response.data;
	},

	async fetchPromotionalImageData() {
		const response = await cmsAxiosInstance.get('/promotional-image');
		return response.data;
	},

	async fetchSpeechata() {
		const response = await cmsAxiosInstance.get('/speech');
		return response.data;
	},

	async fetchPromotionalVideoData() {
		const response = await cmsAxiosInstance.get('/promotional-video');
		return response.data;
	},
};

export const { fetchBanner, fetchPartnerLogos, fetchPromotionalImageData, fetchSpeechata, fetchPromotionalVideoData } =
	cmsAPIs;

export default cmsAPIs;
