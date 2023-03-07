import { logoCoe } from "@/assets/images/images";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Header() {
  const { t } = useTranslation();
  const router = useRouter();
  function scrollFunction() {
    const header = document.getElementById("headerToMakeSticky");
    const sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky-header");
    }
    if (window.pageYOffset <= 5) {
      header.classList.remove("sticky-header");
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <>
      <Head>
        <title>{t("global.webSiteTitle")}</title>
        <meta name="description" content={t("global.webSiteTitle")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      {/* Header navbar */}
      <div className="header" id="headerToMakeSticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid side-gap">
            <Link className="navbar-brand" href="/">
              <Image src={logoCoe} alt="logo" className="white-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse mobile-sec"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("HEADERS.Services_Link_text")}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    // aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className={`dropdown-item ${
                          router.pathname === "/predictive-analytics" ? "active" : ""
                        }`}
                        href="/predictive-analytics"
                      >
                        {t("HEADERS.Services_Link_text_NFT_Development")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          router.pathname === "/recommendation-system"
                            ? "active"
                            : ""
                        }`}
                        href="/recommendation-system"
                      >
                        {t(
                          "HEADERS.Services_Link_text_Crypto_Currency_Development"
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          router.pathname === "/data-visualization" ? "active" : ""
                        }`}
                        href="/data-visualization"
                      >
                        {t("HEADERS.Services_Link_text_DeFi_solutions")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          router.pathname === "/text-analytics" ? "active" : ""
                        }`}
                        href="/text-analytics"
                      >
                        {t("HEADERS.Services_Link_text_DAO_development")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          router.pathname === "/enterprise-solutions"
                            ? "active"
                            : ""
                        }`}
                        href="/enterprise-solutions"
                      >
                        {t("HEADERS.Services_Link_text_Enterprise_solutions")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    // id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("HEADERS.Insight_Link_text")}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className={`dropdown-item ${
                          router.pathname.includes("/blog") ? "active" : ""
                        }`}
                        href="/blog"
                      >
                        {t("HEADERS.Insight_Link_text_Blogs")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          router.pathname.includes("/use-cases") ? "active" : ""
                        }`}
                        href="/use-cases"
                      >
                        {t("HEADERS.Insight_Link_text_Use_Cases")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          router.pathname.includes("/trending") ? "active" : ""
                        }`}
                        href="/trending"
                      >
                        {t("HEADERS.Insight_Link_text_Trending")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          router.pathname.includes("/events") ? "active" : ""
                        }`}
                        href="/events"
                      >
                        {t("HEADERS.Insight_Link_text_Events")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/about">
                    {t("HEADERS.About_Us_Link_text")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/faqs">
                    {t("HEADERS.FAQ_Link_text")}
                  </Link>
                </li>
              </ul>
              <form className="top-contact-us">
                <Link className="btn btn-contact" href="/#about-form">
                  {t("HEADERS.Contact_Us_Link_text")}
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* ===== / End of Header ===== */}
    </>
  );
}
