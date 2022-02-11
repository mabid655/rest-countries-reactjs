import apiClient from "../utils/apiClient";
import {
	ALL_COUNTRIES_ENDPOINT,
	COUNTRY_BY_NAME_ENDPOINT
} from "../utils/constants"

class CountriesService {
	getAllCountries = () => apiClient().get(ALL_COUNTRIES_ENDPOINT);
	getCountryByName = (name) => apiClient().get(COUNTRY_BY_NAME_ENDPOINT + name);
}

export default new CountriesService();