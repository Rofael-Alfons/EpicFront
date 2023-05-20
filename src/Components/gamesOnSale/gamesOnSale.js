import React, { useState, useEffect } from "react";
import "./gamesOnSale.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getGames } from "../../Store/store";
import { Link } from "react-router-dom";

export function GamesOnSale() {
  let MyGames = useSelector((state) => state.epic.games);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Previous</button>,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={`container sm:px-10 mx-auto`}>
      <h2
        className={`text-white text-2xl mb-12 ${
          lang === "en" ? "" : "text-right"
        }`}
      >
        {t("gamesOnSale")}
      </h2>

      <Slider {...settings}>
        {MyGames.map((game, index) => {
          return (
            <Link
              to={`gameDetails/${game._id}`}
              className="card  border-0"
              key={index}
            >
              <div className="p-3">
                <img
                  className="rounded"
                  src={game.Photos[0]}
                  style={{ width: "90%", height: "250px", objectFit: "cover" }}
                />
                {/* {lang==='en'?'BASE GAME':'اللعبة الاساسية'} */}
                <p className="base-game text-left">
                  {lang === "en" ? "BASE GAME" : "اللعبة الاساسية"}
                </p>
                <p className="name text-left">{game.gameName}</p>
                <p className="price text-left">
                  {lang === "en"
                    ? `$${game.Price}`
                    : `${new Intl.NumberFormat("ar-EG").format(
                        game.Price
                      )} US$`}
                </p>
                <p className="text-white text-left">
                  Some text about the jeans..
                </p>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
