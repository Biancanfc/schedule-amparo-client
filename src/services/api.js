import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT;

const api = axios.create({
	baseURL: baseURL,
});

export default api;
