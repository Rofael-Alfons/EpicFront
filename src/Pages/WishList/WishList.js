import { Fragment } from "react";
import GameCard from "../../Components/GameCard/GameCard";
import classes from "./WishList.module.css";
import { CartDashFill } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, getWishList, removeFromWishList } from "../../Store/store";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Components/spinner/spinner";

const WishList = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const id = useSelector((state) => state.epic.id);
  const loader = useSelector((state) => state.epic.loader);
  const [gameRemoved, setGameRemoved] = useState(false);
  const games = useSelector((state) => state.epic.wishList);
  useEffect(() => {
    console.log(games);
    dispatch(getWishList({ id }));
    console.log(games);
  }, [gameRemoved]);
  function removeFromWishListHandler(gameId) {
    dispatch(removeFromWishList({ userId: id, gameId }));
    setGameRemoved(!gameRemoved);
  }
  function addToCartHandler(gameId) {
    dispatch(addToCart({ userId: id, gameId }));
  }

  const gamesList = games.map((game) => {
    return (
      <GameCard
        game={game}
        moveTo={t("cart")}
        removeFromCartorWishListHandler={() =>
          removeFromWishListHandler(game._id)
        }
        moveToHandlers={() => addToCartHandler(game._id)}
      ></GameCard>
    );
  });
  return (
    <Fragment>
      <h1 className={classes.sectionName}>{t("MyWishList")}</h1>
      {loader ? (
        <Spinner />
      ) : (
        <div className={classes.wishlist}>
          <div className={classes.games}>
            {games.length === 0 ? (
              <h1 className={classes.wishlistEmpty}>
                {t("wishlistEmpty")}
                <Link
                  to={"/browse"}
                  className="text-lg transition-all underline hover:font-bold"
                >
                  {t("browseNow")}
                </Link>
                <CartDashFill />
              </h1>
            ) : (
              gamesList
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default WishList;
