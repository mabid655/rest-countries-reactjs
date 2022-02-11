import React from 'react';
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import {LeftOutlined} from '@ant-design/icons';
import Header from "../components/header";
import {addComma} from '../../utils';
import {COMMA_LIST_SEPERATOR} from '../../utils/constants';

import styles from "./detailPage.module.scss";

const DetailPage = () => {
  const { selectedCountry } = useSelector((state) => state.countries);

  return (
    <>
      <Header />

      <div className={styles.detail_container}>
        <NavLink to="/home">
          <button className={styles.back_button}>
            <LeftOutlined width="20px" height="20px" />
            <span>Back</span>
          </button>
        </NavLink>

        <div className={styles.content}>
          <div className={`${styles.imageBg} col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5`}>
            <img src={selectedCountry.flags.svg} />
          </div>
          <div className={`${styles.infoBg} col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7`}>
            <h1>{selectedCountry.name}</h1>

            <div className={styles.info}>
              <div className={`${styles.infoRow} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}>
                <strong>Native Name:</strong>
                <span>{selectedCountry.nativeName}</span>
              </div>
              <div className={`${styles.infoRow} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}>
                <strong>Top Level Domain:</strong>
                <span>{selectedCountry.topLevelDomain.join(", ")}</span>
              </div>
              <div className={`${styles.infoRow} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}>
                <strong>Population:</strong>
                <span>{addComma(selectedCountry.population)}</span>
              </div>
              <div className={`${styles.infoRow} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}>
                <strong>Currencies:</strong>
                <span>{Object.values(selectedCountry.currencies).map((currency) => currency.name)?.join(COMMA_LIST_SEPERATOR)}</span>
              </div>
              <div className={`${styles.infoRow} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}>
                <strong>Region:</strong>
                <span>{selectedCountry.region}</span>
              </div>
              <div className={`${styles.infoRow} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}>
                <strong>Languages:</strong>
                <span>
                  {selectedCountry.languages.map((language) => (
                    <>{language.name}</>
                  ))}
                </span>
              </div>
              <div className={`${styles.infoRow} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}>
                <strong>Sub Region:</strong>
                <span>{selectedCountry.subregion}</span>
              </div>
              <div className={`${styles.infoRow} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}>
                <strong>Capital:</strong>
                <span>{selectedCountry.capital}</span>
              </div>
            </div>
            {selectedCountry.borders && (
              <div className={styles.borders}>
                <strong>Border Countries:</strong>
                <div className={styles.bordersBg}>
                  {selectedCountry.borders.map((border, i) => (
                    <div className={styles.border} key={`border-${i}`}>
                      <>{border}</>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
