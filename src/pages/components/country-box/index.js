import React from "react";
import { NavLink } from "react-router-dom";
import {useDispatch} from "react-redux";
import countriesActions from "../../../redux/actions/countriesActions";
import styles from "./country-box.module.scss";

const CountryBox = ({ country }) => {
  const dispatch = useDispatch();
  const storeSelectedCountry = () => {
    dispatch(countriesActions.selectedCountry(country));
  };

  return (
    <NavLink to={{pathname: '/detail-page', country}}>
      <div className={styles.countryContainer} onClick={storeSelectedCountry}>
          <div className={styles.countryImageBg}>
            <img src={country.flags.svg} />
          </div>

        <div className={styles.textBg}>
          <h2>{country.name}</h2>
        </div>
        <div className={styles.infoRow}>
          <strong>Population</strong>
          <span>{country.population}</span>
        </div>
        <div className={styles.infoRow}>
          <strong>Region</strong>
          <span>{country.region}</span>
        </div>
        <div className={styles.infoRow}>
          <strong>Capital</strong>
          <span>{country.capital}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default CountryBox;
