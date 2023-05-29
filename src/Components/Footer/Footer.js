import { Link } from "react-router-dom";
// import "./Footer.css";
import FooterLink from "../FooterLink/FooterLink";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="mt-auto">
      <div className="container mx-auto logo-col text-start">
        <div className="flex justify-between">
          <ul className="social-links">
            <li>
              <Link className="footer-link" to="/#">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/#">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/#">
                <ion-icon class="social-icon" name="logo-youtube"></ion-icon>
              </Link>
            </li>
          </ul>
          <Link to="/#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="icon w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
      <h5 className="container text-secondary text-start fs-3  text-zinc-400 ">
        {t("footer-resources")}
      </h5>
      <div className="container grid grid--footer text-start">
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title={t("footer-supportCreator")} />
            <FooterLink title={t("footer-DistributeEpicGames")} />
            <FooterLink title={t("footer-Careers")} />
            <FooterLink title={t("footer-Company")} />
          </ul>
        </nav>

        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title={t("footer-FanArtPolicy")} />
            <FooterLink title={t("footer-UXResearch")} />
            <FooterLink title={t("footer-StoreEULA")} />
          </ul>
        </nav>

        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title={t("footer-OnlineServices")} />
            <FooterLink title={t("footer-CommunityRules")} />
            <FooterLink title={t("footer-EpicNewsroom")} />
          </ul>
        </nav>
      </div>

      <h5 className="container text-secondary text-start fs-3  my-5 text-zinc-400 ">
        {t("footer-MadeByEpicGames")}
      </h5>
      <div className="container grid grid--footer text-start">
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title={t("footer-BattleBreakers")} />
            <FooterLink title={t("footer-Fortnite")} />
            <FooterLink title={t("footer-InfinityBlades")} />
          </ul>
        </nav>

        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title={t("footer-RoboRecall")} />
            <FooterLink title={t("footer-ShadowComplex")} />
            <FooterLink title={t("footer-UnrealTournament")} />
          </ul>
        </nav>
      </div>

      <div className="container divider "></div>

      <p className="container copyright grid text-start">
        Copyright &copy;2023, Epic Games, Inc. {t("footer-copyRight")}
      </p>

      <div className="container grid grid--footer-sm-spacing">
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title={t("footer-TermsofService")} />
          </ul>
        </nav>
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title={t("footer-PrivacyPolicy")} />
          </ul>
        </nav>
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title={t("footer-StoreRefundPolicy")} />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
