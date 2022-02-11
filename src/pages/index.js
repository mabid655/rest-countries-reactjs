import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCountriesAsync} from "../redux/thunks";
import Header from "./components/header";
import SubHeader from "./components/sub-header";
import CountryBox from "./components/country-box";
import Loader from "./components/loader";

import styles from "../styles/index.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(loadCountriesAsync());
	}, []);

  return (
    <div className={styles.container}>
      <Header />
      <SubHeader />
      <div className={styles.countries_container}>
        {isLoading && <Loader />}
        {countries && countries.map((country, i) => (
          <CountryBox country={country} key={`search-country-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;
