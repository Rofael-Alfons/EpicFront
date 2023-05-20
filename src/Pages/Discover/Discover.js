import React, { useState } from "react";
// import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios'
// import axiosInstance from './../../axiosConfig/instanc';
import TopSeller from "../../Components/TopSeller/topSeller";
import StoreSlider from "../../Components/StoreSlider/StoreSlider";
import "./Discover.css";
import { Collection } from "react-bootstrap-icons";
import Collections from "../../Components/Collections/Collections";
import Catalog from "../../Components/Catalog/Catalog";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { GamesOnSale } from "../../Components/gamesOnSale/gamesOnSale";
import FreeGames from "../../Components/freeGames/freeGames";

const Discover = () => {
  // const [search, setsearch] = useState("");
  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("user")));
  }, []);
  // py-40 px-20
  const { t, i18n } = useTranslation();
  let currentLanguage = i18n.language;
  return (
    <section className="">
      <section className="descvSec py-5 md:px-10 lg:px-20">
        <StoreSlider></StoreSlider>
      </section>

      <section className="descvSec py-5 md:px-10 lg:px-20">
        <GamesOnSale></GamesOnSale>
      </section>

      <section className="descvSec py-5 md:px-10 lg:px-20">
        <Collections></Collections>
      </section>

      <section className="descvSec py-5 md:px-10 lg:px-20">
        <FreeGames></FreeGames>
      </section>

      <section className="w-full h-full place-items-center mt-16 mb-5 descvSec py-5 md:px-10 md:mb-0 lg:px-20">
        <div className="flex Container md:flex-row ">
          {/* section 1 */}
          <div className="mb-7 Section md:grid-cols-2 topSec1">
            <div className="flex mb-7 w-full header">
              <p className="title text-2xl font-bold text-left text-white">
                {t("TopSellers")}
              </p>
              <button className="titlebtnD text-white px-2 py-3 rounded-lg text-xs bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ">
                {t("viewMore")}
              </button>
            </div>

            {/* Games */}
            <div className="cards ">
              <TopSeller props="a"></TopSeller>
            </div>
          </div>

          {/* section 2 */}
          <div className="mb-7 Section hiddd">
            <div className="flex mb-7 w-full header">
              <p className="title text-2xl font-bold text-left text-white ">
                {t("MostPlayed")}
              </p>
              <button className="titlebtnD text-white px-2 py-3 rounded-lg text-xs bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ">
                {t("viewMore")}
              </button>
            </div>

            {/* Games */}
            <div className="cards">
              <TopSeller props="b"></TopSeller>
            </div>
          </div>

          {/* section 3 */}
          <div
            className="mb-7 md:grid-cols-2 invisible md:visible"
            id="Section3"
          >
            <div className="flex mb-7 w-full header">
              <p className="title text-2xl font-bold text-left text-white">
                {t("TopPlayerRating")}
              </p>
              <button className="titlebtnD text-white px-2 py-3 rounded-lg text-xs bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ">
                {t("viewMore")}
              </button>
            </div>

            {/* Games */}
            <div className="cards">
              <TopSeller props="c"></TopSeller>
            </div>
          </div>

          {/* <Outlet  context={[search, setsearch]}/> */}
        </div>
      </section>

      <section className={`descvSec py-3 md:px-10 lg:px-12 CatalogClas`}>
        <Catalog></Catalog>
      </section>
    </section>
  );
};

export default Discover;
