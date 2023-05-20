import React from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";
import { useTranslation } from "react-i18next";

const Catalog = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="flex flex-col rounded-lg shadow-lg md:flex-row"
      id="catalogCD"
    >
      <img
        className="h-auto object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="download.avif"
        alt="catalog img"
        id="catalogIMG"
      />

      <div className="flex flex-col justify-start p-4 " id="catalogDIV">
        <h5 className="mb-4 text-base font-medium text-neutral-800 dark:text-neutral-50">
          {t("ExploreOurCatalog")}
        </h5>
        <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-300">
          {t("browseDescription")}
        </p>
        <Link
          className="bg-white w-max p-4 text-black rounded-r-md rounded-l-md "
          to="/browse"
        >
          {t("browseAll")}{" "}
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
