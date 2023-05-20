import React, { useEffect, useState } from "react";
import styles from "./StoreSlider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getGames } from "../../Store/store";
import Spinner from "../spinner/spinner";
import { Link } from "react-router-dom";

const StoreSlider = () => {
  const dispatch = useDispatch();
  const epicGames = useSelector((state) => state.epic.games.slice(0, 5));
  const loader = useSelector((state) => state.epic.loader);
  console.log(loader);
  console.log(epicGames);
  // const [games, setGames] = useState([]);
  // console.log(games);

  const { t, i18n } = useTranslation();
  var [counter, setCounter] = useState(0);

  const games = [
    {
      gameName: "Dead Island 2 Gold Edition",
      Photos: [
        "https://image.api.playstation.com/vulcan/ap/rnd/202208/2321/rNVDp1zmsYmtYxplFjNqzShE.jpg",
      ],
    },
    {
      gameName: "STAR WARS Jedi: Survivor™ Standard Edition",
      Photos: [
        "https://cdn2.unrealengine.com/egs-jedi-survivor-carousel-desktop-1280x702-e064efcb1338.jpg?h=720&quality=medium&resize=1&w=1280",
      ],
    },
    {
      gameName: "Redfall",
      Photos: [
        "https://cdn2.unrealengine.com/egs-redfall-carousel-desktop-1248x702-bf6c0a319751.jpg?h=720&quality=medium&resize=1&w=1280",
      ],
    },
    {
      gameName: "Dying Light 2 Stay Human",
      Photos: [
        "https://cdn2.unrealengine.com/egs-dying-light-2-carousel-desktop-1248x702-6fb8d402cc43.jpg?h=720&quality=medium&resize=1&w=1280",
      ],
    },
    {
      gameName: "Tchia",
      Photos: [
        "https://cdn2.unrealengine.com/tchia-accoladegraphic-1920x1080-v3-1920x1080-d8510b78c553.jpg?h=480&quality=medium&resize=1&w=854",
      ],
    },
    {
      gameName: "Fall Guys",
      Photos: [
        "https://cdn2.unrealengine.com/egs-fall-guys-bugsnax-breaker-1920x1080-125701f5b397.jpg?h=480&quality=medium&resize=1&w=854",
      ],
    },
  ];
  console.log(games);

  ////////////////////////////////////////

  useEffect(() => {
    // use Redux Thunk
    // dispatch(getGames());
    const interval = setInterval(() => {
      console.log(counter); //  0 1 2 3 4 5

      if (counter === games.length - 1) return setCounter(0);
      counter++;
      setCounter(counter);
    }, 8000);

    return () => clearInterval(interval);
  }, [games.length, counter]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(counter); //  0 1 2 3 4 5

  //     if (counter === games.length - 1) return setCounter(0);
  //     counter++;
  //     setCounter(counter);
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, [games.length, counter]);

  // Change current slide

  const onClick = (e) => {
    let value = parseInt(e.target.closest("div").id);
    if (value !== counter) setCounter(value);
  };
  let currentLanguage = i18n.language;
  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div className={`${styles.sliderWrapper} bg-transparent`}>
          {/* section start 0_0 */}
          <div //
            className={`${styles.featured} w-fit bg-transparent ${
              currentLanguage === "en" ? "mr-10" : "ml-10"
            }`}
            style={{
              backgroundImage: `url(${games[counter].Photos[0]})`,
              width: "70vw",
              height: "80vh",
              padding: "20px",
              borderRadius: "30px",
            }}
          >
            <div className={`${styles.itemText} `}>
              <h3
                className={`bg-transparent text-white text-xl ${
                  currentLanguage === "en" ? "text-left" : "text-center"
                }`}
              >
                {games[counter].gameName}
              </h3>
              <div className={`${styles.buttons} bg-transparent`}>
                <a
                  href="#!"
                  className={`${styles.btn} ${styles.btnDownload} ${
                    currentLanguage === "en" ? "rounded-l-lg" : "rounded-r-lg"
                  }`}
                >
                  {t("slider-downloadNow")}
                </a>
                <a
                  href="#!"
                  className={`${styles.btn} ${styles.btnWishlist} ${
                    currentLanguage === "en" ? "rounded-r-lg" : "rounded-l-lg"
                  }`}
                  style={{ fontWeight: "700" }}
                >
                  +
                </a>
              </div>
            </div>
          </div>
          {/* section end */}

          <ul
            className="hidden sm:flex flex-col justify-center "
            // className={styles.gamelist}
            // style={{ display: "flex", justifyContent: "center" }}
          >
            {epicGames.map((game, index) => (
              <Link
                to={`gameDetails/${game._id}`}
                key={game.id}
                onClick={onClick}
                // className='h-auto'
                style={{
                  display: "flex",
                  height: "70px",
                  marginBottom: "10px",
                  justifyContent: "center",
                }}
              >
                {/* className='w-48' */}
                <div
                  id={index}
                  className={`${styles.game} ${
                    index === counter ? styles.current : ""
                  } rounded-lg pb-4 text-white text-xs flex flex-col items-center border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700`}
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src={game.Photos[0]}
                    alt="game"
                    style={{
                      width: "50px",
                      height: "55px",
                      marginRight: "10px",
                      marginLeft: "5px",
                      marginTop: "10px",
                    }}
                    className="rounded-lg mt-3 md:m-0"
                  />
                  <p className="text-sm w-full h-full bg-transparent flex items-center text-left sm:text-center ">
                    {game.gameName}
                  </p>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StoreSlider;
