import React, {useEffect, useState} from 'react';
import {SearchOutlined, CaretDownOutlined} from '@ant-design/icons';
import {useDispatch} from "react-redux";
import {loadCountriesAsync, loadCountryByNameAsync} from "../../../redux/thunks";
import countriesActions from "../../../redux/actions/countriesActions";
import {REGIONS} from '../../../utils/constants';

import styles from "./subHeader.module.scss";

const SubHeader = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState(null);
  const [regionText, setRegionText] = useState(null);

  const searchCountry = () => {
    if(searchText !== null) {
      dispatch(loadCountryByNameAsync(searchText));
    }
  };

  useEffect(() => {
    if(searchText !== null) {
      dispatch(loadCountryByNameAsync(searchText));
    }
    if(searchText === null || searchText === '') {
      dispatch(loadCountriesAsync());
    }
	}, [searchText]);

  const filterByRegion = (region) => {
    setRegionText(region);
    if (region === 'ALL') {
      dispatch(loadCountriesAsync());
    }
    dispatch(countriesActions.countriesByRegion(region));
  };

  return (
    <div className={styles.subHeader}>
      <div className={`${styles.input} col-12`}>
        <SearchOutlined
          width="20px"
          height="20px"
          onClick={searchCountry}
        />
        <input
          id="search-country"
          type="text"
          onChange={event => setSearchText(event.target.value.trim())}
          placeholder="Search a country.."
          onKeyPress={(e) => e.key === "Enter" && searchCountry()}
        />
      </div>

      <button className={`${styles.drop_down} col-12`}>
        <div className={styles.title}>
          {regionText ?? "Filter by Region"}
        </div>
        <CaretDownOutlined
          width="20px"
          height="20px"
        />

        <div className={styles.drop_down_menu}>
          {REGIONS.map((region, i) => (
            <div
              className={styles.option}
              key={`region-${i}`}
              onClick={() => filterByRegion(region)}
            >
              {region}
            </div>
          ))}
        </div>
      </button>
    </div>
  );
};

export default SubHeader;
