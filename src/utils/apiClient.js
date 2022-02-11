import axios from "axios";
import {BASE_URL} from "./constants"

const apiClient = () => {
	const axiosInstance = axios.create({
		baseURL: BASE_URL,
		responseType: "json",
	});

	return axiosInstance;
};

export default apiClient;