import actionTypes from "./actionTypes";

const countriesLoadStart = () => ({
	type: actionTypes.COUNTRIES_LOAD_START,
});
const countriesLoadSuccess = (countries) => ({
	type: actionTypes.COUNTRIES_LOAD_SUCCESS,
	payload: countries,
});
const countriesLoadError = (errorMessage) => ({
	type: actionTypes.COUNTRIES_LOAD_ERROR,
	payload: errorMessage,
});


const countryByNameLoadStart = () => ({
	type: actionTypes.COUNTRY_BY_NAME_LOAD_START,
});
const countryByNameLoadSuccess = (countries) => ({
	type: actionTypes.COUNTRY_BY_NAME_LOAD_SUCCESS,
	payload: countries,
});
const countryByNameLoadError = (errorMessage) => ({
	type: actionTypes.COUNTRY_BY_NAME_LOAD_ERROR,
	payload: errorMessage,
});


const countriesByRegion = (region) => ({
	type: actionTypes.COUNTRIES_BY_REGION,
	regionText: region
});

const selectedCountry = (selectedCountry) => ({
	type: actionTypes.SELECTED_COUNTRY,
	selectedCountry
});

export default {
	countriesLoadStart,
	countriesLoadSuccess,
	countriesLoadError,

	countryByNameLoadStart,
	countryByNameLoadSuccess,
	countryByNameLoadError,

	countriesByRegion,

	selectedCountry,
};