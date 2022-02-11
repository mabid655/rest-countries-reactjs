import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const filterByRegion = (regionText, state) => {
	const countries = state.countriesList;
	return countries.filter(country => country.region === regionText);
};

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.COUNTRIES_LOAD_START:
			return {
				...state,
				isLoading: true,
				countries: null,
				errorMessage: null,
			};
		case actionTypes.COUNTRIES_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				countries: action.payload,
				countriesList: action.payload,
			};
		case actionTypes.COUNTRIES_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
			};


		case actionTypes.COUNTRY_BY_NAME_LOAD_START:
			return {
				...state,
				isLoading: true,
				countries: null,
				errorMessage: null,
			};
		case actionTypes.COUNTRY_BY_NAME_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				countries: action.payload,
			};
		case actionTypes.COUNTRY_BY_NAME_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
			};


		case actionTypes.COUNTRIES_BY_REGION:
			return {
				...state,
				countries: filterByRegion(action.regionText, state),
			};

		case actionTypes.SELECTED_COUNTRY:
			return {
				...state,
				selectedCountry: action.selectedCountry,
			};

		default:
			return state;
	};
};

export default countriesReducer;