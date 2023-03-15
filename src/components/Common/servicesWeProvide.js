import React from "react";
import {
  OurOfferingsImg1,
  OurOfferingsImg2,
  OurOfferingsImg3,
  OurOfferingsImg4,
  OurOfferingsImg5,
} from "@/assets/images/images";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

function ServicesWeProvide(props) {
  const {
    showNftDevelopment = true,
    showCryptoDevelopment = true,
    showDefiDevelopment = true,
    showDaoDevelopment = true,
    showEnterpriceDevelopment = true,
  } = props;
  const router = useRouter();
  function handleClick(route) {
    console.log("router", router, "route", route);
    router.push(`${route}`);
  }

  const { t } = useTranslation();
  return (
    <section className="services-section">
      <div className="container">
        <h3 className="section-heading extra-small-gradient">
          {t("HOMEPAGE.our_services_sections.heading")}
        </h3>
        <h5 className="section-sub-heading">
          {t("HOMEPAGE.our_services_sections.SEC_SUB_heading")}
        </h5>
        {/* card */}
        <div
          onClick={() => {
            handleClick("/nft-development");
          }}
          className={`services-card ${showNftDevelopment ? "" : "d-none"}`}
        >
          <div className="card-image">
            <Image src={OurOfferingsImg1} alt="NFT Development" />
          </div>
          <div className="card-content">
            <h4 className="card-title">
              {t("HOMEPAGE.our_services_sections.service_1_head")}
            </h4>
            <p>{t("HOMEPAGE.our_services_sections.service_1_desc")}</p>
          </div>
        </div>
        {/* end card */}
        {/* card */}
        <div
          onClick={() => {
            handleClick("/crypto-currency-development");
          }}
          className={`services-card ${showCryptoDevelopment ? "" : "d-none"}`}
        >
          <div className="card-image">
            <Image src={OurOfferingsImg2} alt="Crypto Currency Development" />
          </div>
          <div className="card-content">
            <h4 className="card-title">
              {t("HOMEPAGE.our_services_sections.service_2_head")}
            </h4>
            <p>{t("HOMEPAGE.our_services_sections.service_2_desc")}</p>
          </div>
        </div>
        {/* end card */}
        {/* card */}
        <div
          onClick={() => {
            handleClick("/defi-solutions");
          }}
          className={`services-card ${showDefiDevelopment ? "" : "d-none"}`}
        >
          <div className="card-image">
            <Image src={OurOfferingsImg3} alt="DeFi solutions" />
          </div>
          <div className="card-content">
            <h4 className="card-title">
              {t("HOMEPAGE.our_services_sections.service_3_head")}
            </h4>
            <p>{t("HOMEPAGE.our_services_sections.service_3_desc")}</p>
          </div>
        </div>
        {/* end card */}
        {/* card */}
        <div
          onClick={() => {
            handleClick("/dao-development");
          }}
          className={`services-card ${showDaoDevelopment ? "" : "d-none"}`}
        >
          <div className="card-image">
            <Image src={OurOfferingsImg4} alt="DAO development" />
          </div>
          <div className="card-content">
            <h4 className="card-title">
              {t("HOMEPAGE.our_services_sections.service_4_head")}
            </h4>
            <p>{t("HOMEPAGE.our_services_sections.service_4_desc")}</p>
          </div>
        </div>
        {/* end card */}
        {/* card */}
        <div
          onClick={() => {
            handleClick("/enterprise-solutions");
          }}
          className={`services-card ${
            showEnterpriceDevelopment ? "" : "d-none"
          }`}
        >
          <div className="card-image">
            <Image src={OurOfferingsImg5} alt="Enterprise solutions" />
          </div>
          <div className="card-content">
            <h4 className="card-title">
              {t("HOMEPAGE.our_services_sections.service_5_head")}
            </h4>
            <p>{t("HOMEPAGE.our_services_sections.service_5_desc")}</p>
          </div>
        </div>
        {/* end card */}
      </div>
    </section>
  );
}
export default ServicesWeProvide;
