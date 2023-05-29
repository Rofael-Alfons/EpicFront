import "./Header.css";
// import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import i18n, { changeLanguage } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { epicActions } from "../../Store/store";

const Header = () => {
  const navigate = useNavigate();
  const user = "SIGN IN";
  const lang = useSelector((state) => state.epic.language);
  const displayName = useSelector((state) => state.epic.displayName);
  const loggedIn = useSelector((state) => state.epic.loggedIn);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  let currentLanguage = i18n.language;
  useEffect(() => {
    currentLanguage === "ar"
      ? (document.body.dir = "rtl")
      : (document.body.dir = "ltr");
    console.log("hello", displayName);

    // dispatch(changeLanguage(currentLanguage));
  }, [loggedIn, displayName, currentLanguage]);

  // console.log(currentLanguage);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function signoutHandler(e) {
    e.preventDefault();
    dispatch(epicActions.signOut());
    navigate("/signIn");
  }

  const button = document.querySelector("myMenu_Btn");
  const menu = document.getElementById("navbar-multi-level");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    // menu.classList.toggle('hidden');
    setIsMenuOpen(!isMenuOpen);
  };

  const [isHidden, setIsHidden] = useState(false);
  const handleClick2 = () => {
    // menu.classList.toggle('hidden');
    setIsHidden(!isHidden);
  };
  //()=>{getElementById(dropdwnl_)}

  return (
    <>
      <div className="flex w-full">
        <nav
          className="bg-transparent w-full border-gray-200 dark:border-gray-700 "
          style={{ backgroundColor: "#2a2a2a" }}
        >
          <div
            className="max-w-screen-xl h-full flex flex-wrap items-center justify-between mx-auto justify-items-center"
            style={{ color: "#c2c2c2" }}
          >
            <a href="#" className="flex h-full items-center ">
              <img
                src="epic white logo.png"
                className="h-8 mr-3 px-3"
                alt="epic Logo"
              />

              <Link
                to="/"
                className="block pl-3 pr-4 pb-4 pt-5 h-full hover:text-white" // pt-1 pl-3 pr-4 h-3/6 content-end ml-2
                aria-current="page"
                id="stlink"
              >
                {t("store")}
              </Link>
            </a>

            {/* Menu Btn */}
            <button
              id="myMenu_Btn"
              onClick={handleClick}
              data-collapse-toggle="navbar-multi-level"
              type="button"
              className="relative w-14 h-full m-0 inline-flex md:hidden items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="navbar-multi-level"
              aria-expanded="true"
              style={{ backgroundColor: "#0078f2" }}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            {/* Mobile menu button*/}
            {/* <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
        </button> */}

            {/* {({ open }) => (  */}

            <div
              className={`hidden w-full md:block md:w-auto `}
              id="navbar-multi-level"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700 items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div style={{ color: "#c2c2c2" }} className="flex ">
                    <Menu.Button
                      id="btnhov"
                      className="inline-flex w-full justify-center gap-x-1.5 bg-transparent  text-sm items-center text-inherit hover:text-white"
                    >
                      <i className="bi bi-globe-americas block py-2 pl-3  rounded md:bg-transparent md:p-0 md:dark:bg-transparent text-xl pb-2 hover:text-white"></i>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      style={{ backgroundColor: "#2a2a2a" }}
                      id="dropdwnl2"
                      className="absolute z-10 mt-2 w-36 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${classNames(
                                active ? " text-white" : "text-inherit",
                                "block px-4 py-2 text-sm"
                              )} text-center text-xs`}
                              onClick={() => {
                                i18n.changeLanguage("ar");
                                currentLanguage = "ar";
                              }}
                            >
                              العربية
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${classNames(
                                active ? " text-white" : "text-inherit",
                                "block px-4 py-2 text-sm"
                              )} text-center text-xs`}
                              onClick={() => {
                                i18n.changeLanguage("en");
                                currentLanguage = "en";
                              }}
                            >
                              English
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Menu
                  as="div"
                  className="relative inline-block text-left h-full"
                >
                  <div style={{ color: "#c2c2c2" }} className="flex ">
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-transparent pr-8 pl-2 text-sm items-center text-inherit hover:text-white">
                      {loggedIn ? (
                        <div className="flex justify-between items-center">
                          <div className="flex justify-between items-center">
                            <i className="bi bi-person-fill mx-1 block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-xl md:dark:bg-transparent pb-4  text-inherit hover:text-white"></i>
                            {displayName}
                          </div>
                          <div className="w-2 h-2 mx-2 bg-green-600 rounded-full"></div>
                        </div>
                      ) : (
                        <Link to={"/signIn"}>{t("signIn")}</Link>
                      )}
                      {/* {t("signIn")} */}
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      style={{ backgroundColor: "#2a2a2a" }}
                      id="dropdwnl"
                      className="absolute z-10 mt-2 w-36 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      {loggedIn && (
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/account/setting"
                                className={`${classNames(
                                  active ? " text-white" : "text-inherit",
                                  "block px-4 py-2 text-sm"
                                )} text-center text-xs`}
                              >
                                {t("signIn-account")}
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/wishlist"
                                className={`${classNames(
                                  active ? " text-white" : "text-inherit",
                                  "block px-4 py-2 text-sm"
                                )} text-center text-xs`}
                              >
                                {t("signIn-wishlist")}
                              </Link>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={signoutHandler}
                                  type="submit"
                                  className={`${classNames(
                                    active ? " text-white" : "text-inherit",
                                    "block w-full px-4 py-2 text-left text-sm"
                                  )} text-center text-xs`}
                                >
                                  {t("signIn-signout")}
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </ul>
            </div>
            {/* ))} */}
          </div>
        </nav>
        <a
          href="#"
          id="dwnl"
          className=" h-full pl-3 pr-4 text-sm md:p-0 md:block hidden items-center text-center hover:text-white"
          style={{ height: "100%" }}
        >
          {t("downloadButton")}
        </a>

        <nav
          className={`myMenu ${
            isMenuOpen ? "block" : "hidden"
          } absolute z-10 mt-14 right-0 p-1 w-36 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          style={{ backgroundColor: "#2a2a2a" }}
        >
          {/* user */}
          <div
            style={{ color: "#c2c2c2" }}
            className="flex border-b border-slate-400 border-1"
          >
            <button className="inline-flex w-full justify-center gap-x-1.5 bg-transparent pr-8 pl-2 text-sm items-center text-inherit hover:text-white">
              {loggedIn ? (
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <i className="bi bi-person-fill mx-1 block mt-3 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-xl md:dark:bg-transparent pb-4  text-inherit hover:text-white"></i>
                    {displayName}
                  </div>
                  <div className="w-2 h-2 mx-2 bg-green-600 rounded-full"></div>
                </div>
              ) : (
                <Link to={"/signIn"}>{t("signIn")}</Link>
              )}
              {/* {t("signIn")} */}
            </button>
          </div>

          {/* language */}
          <button
            id="btnhov"
            onClick={handleClick2}
            className="inline-flex w-full justify-center gap-x-1.5 bg-transparent  text-sm items-center text-inherit hover:text-white"
          >
            <i className="bi bi-globe-americas block py-2 pl-3 rounded md:bg-transparent md:p-0 md:dark:bg-transparent text-xl pb-2 text-inherit hover:text-white"></i>
          </button>

          <section
            style={{ backgroundColor: "#2a2a2a" }}
            id="dropdwnl_"
            className={` ${
              isHidden ? "block" : "hidden"
            } mt-1 z-10 w-36 origin-top-right border-t border-slate-400 border-1"
                      `}
          >
            {/*  z-10 mt-2 w-36 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none */}
            <div className="py-1">
              <div>
                <a
                  href="#"
                  className={`text-inherit hover:text-white block px-4 py-2 text-sm text-center`}
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    currentLanguage = "ar";
                  }}
                >
                  العربية
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className={`text-inherit hover:text-white block px-4 py-2 text-sm text-center`}
                  onClick={() => {
                    i18n.changeLanguage("en");
                    currentLanguage = "en";
                  }}
                >
                  English
                </a>
              </div>
            </div>
          </section>
        </nav>
      </div>
    </>
  );
};

export default Header;
