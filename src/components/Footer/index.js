import React, { Component } from "react";
import Link from "next/link";
import {
  logoCoe,
  iconTwitter,
  iconLinkdin,
  iconEmail,
  kiwiTeckLogo,
  iconTelegram,
  iconGame,
} from "@/assets/images/images";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <Link className="navbar-brand" href="/">
              <Image src={logoCoe} alt="logo" />
            </Link>
            <p className="info-text">{t("FOOTERS.Description_Text")}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="link-heading">{t("FOOTERS.Links_Text")}</h5>
            <ul className="footer-link">
              {/* <li>
                <Link href="#" className="nav-link" title="Privacy Policy">
                  {t("FOOTERS.Privacy_policy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link" title="Terms & Conditions">
                  {t("FOOTERS.Term_Condition")}
                </Link>
              </li> */}
              <li>
                <Link href="/blogs" className="nav-link" title="Insight">
                  {t("FOOTERS.Insight")}
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="nav-link" title="FAQ">
                  {t("FOOTERS.FAQ")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about-form?type=partnership"
                  className="nav-link"
                  title="Become a Business Partner"
                >
                  {t("FOOTERS.Become_a_Business_Partner")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="link-heading">{t("FOOTERS.SERVICES_TEXT")}</h5>
            <ul className="footer-link">
              <li>
                <Link
                  href="#"
                  className="nav-link"
                  title="Predictive Analytics"
                >
                  {t("FOOTERS.NFT_Development")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="nav-link"
                  title="Crypto Currency Development"
                >
                  {t("FOOTERS.Crypto_Currency_Development")}
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link" title="DeFi solutions">
                  {t("FOOTERS.DeFi_solutions")}
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link" title="DAO development">
                  {t("FOOTERS.DAO_development")}
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link" title="Chat Gpt">
                  {t("FOOTERS.Enterprise_solutions")}
                </Link>
              </li>
              <li>
                <Link
                  href="/enterprise-solutions"
                  className="nav-link"
                  title="Enterprise solutions"
                >
                  {t("FOOTERS.Services_ChatGPT")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="link-heading"> {t("FOOTERS.Contact")}</h5>
            <div className="address-link">
              <Image src={iconEmail} alt="Email" />
              <Link
                href={`mailto:${t("FOOTERS.EmailTo")}`}
                title="web3.coe@kiwitech.com"
              >
                {t("FOOTERS.EmailTo")}
              </Link>
            </div>
            <div className="social-link">
              <Link
                href="https://twitter.com/Web3kiwiTech"
                title="twitter"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={iconTwitter} alt="Twitter" />
              </Link>
              <Link
                href="https://www.linkedin.com/showcase/webcenterofexcellence/"
                title="linkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={iconLinkdin} alt="linkedIn" />
              </Link>
              <Link href="#" title="discord" target="_blank" rel="noreferrer">
                <Image src={iconGame} alt="discord" />
              </Link>
              <Link href="#" title="telegram" target="_blank" rel="noreferrer">
                <Image src={iconTelegram} alt="telegram" />
              </Link>
            </div>
          </div>
          <div className="col-12 text-center">
            <div className="horizontal-line"></div>
            <div className="sub-footer">
              <p>&copy; {t("FOOTERS.copyright_text")}</p>
              <a href="#">
                <Image src={kiwiTeckLogo} alt="KiwiTech" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
