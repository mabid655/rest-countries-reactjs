import CountriesService from "../services/countries";
import countriesActions from "./actions/countriesActions";

export const loadCountriesAsync = () => (dispatch) => {
	dispatch(countriesActions.countriesLoadStart());

	CountriesService.getAllCountries()
		.then((response) => dispatch(countriesActions.countriesLoadSuccess(response.data)))
		.catch((error) => dispatch(countriesActions.countriesLoadError(error.message)));
};

export const loadCountryByNameAsync = (countryName) => (dispatch) => {
	dispatch(countriesActions.countryByNameLoadStart());

	CountriesService.getCountryByName(countryName)
		.then((response) => dispatch(countriesActions.countryByNameLoadSuccess(response.data)))
		.catch((error) => dispatch(countriesActions.countryByNameLoadError(error.message)));
};