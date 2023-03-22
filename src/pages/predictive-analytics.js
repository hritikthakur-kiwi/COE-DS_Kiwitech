import {
  betterRiskManagement,
  competitveConfi,
  enchanceCustomerExp,
  fraudDetection,
  iconGame,
  iconLinkdin,
  iconTelegram,
  iconTwitter,
  improveDM,
  increaseEffi,
  predictingChrun,
} from "@/assets/images/images";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Standard from "@/components/Common/standard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 80,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 80,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 80,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

function NFTDevelopment(props) {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <section className="nft-development-banner">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="text-center">
                <h3 className="gradient-heading">
                  {t("NFT_DEVELOPMENT.head_section_title")}
                </h3>
                <h5 className="section-sub-heading text-white">
                  {t("NFT_DEVELOPMENT.head_section_subhead")}
                </h5>
                <p className="nft-banner-para">
                  {t("NFT_DEVELOPMENT.head_section_para")}
                </p>
                <p className="small-text">
                  {t("NFT_DEVELOPMENT.join_our_community")}
                </p>
                <div className="social-link">
                  <a
                    href="https://twitter.com/Web3kiwiTech"
                    title="Twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={iconTwitter} alt="Twitter" />
                  </a>
                  <a
                    href="https://www.linkedin.com/showcase/webcenterofexcellence/"
                    title="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={iconLinkdin} alt="LinkedIn" />
                  </a>
                  <a href="#" title="discord" target="_blank" rel="noreferrer">
                    <Image src={iconGame} alt="discord" />
                  </a>
                  <a href="#" title="telegram" target="_blank" rel="noreferrer">
                    <Image src={iconTelegram} alt="telegram" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ---- NFT  ---- */}
      <div className="nft-wrapper">
        {/* <h3 className="section-sub-heading text-white">{t("NFT_DEVELOPMENT.head_section_title")}</h3> */}
        <div className="ngt-content">
          <Carousel
            autoPlay={true}
            showDots={true}
            swipeable={true}
            draggable={true}
            arrows={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={300}
            partialVisible={true}
          >
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={improveDM} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("NFT_DEVELOPMENT.carousel_section_head_1")}
                  </h4>
                  <p className="nft-text-para">
                    {t("NFT_DEVELOPMENT.carousel_section_text_1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={increaseEffi} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("NFT_DEVELOPMENT.carousel_section_head_2")}
                  </h4>
                  <p className="nft-text-para">
                    {t("NFT_DEVELOPMENT.carousel_section_text_2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={enchanceCustomerExp} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("NFT_DEVELOPMENT.carousel_section_head_3")}
                  </h4>
                  <p className="nft-text-para">
                    {t("NFT_DEVELOPMENT.carousel_section_text_3")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={betterRiskManagement} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("NFT_DEVELOPMENT.carousel_section_head_4")}
                  </h4>
                  <p className="nft-text-para">
                    {t("NFT_DEVELOPMENT.carousel_section_text_4")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={competitveConfi} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("NFT_DEVELOPMENT.carousel_section_head_5")}
                  </h4>
                  <p className="nft-text-para">
                    {t("NFT_DEVELOPMENT.carousel_section_text_5")}
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* ---- we facilate ----- */}
      <Standard />
      {/* -----  // End of we facilate ----- */}

      {/* -----  // start problem ----- */}
      <section className="solution-provide-wrapper">
        <div className="container">
          <Row>
            <Col md={6}>
              <div className="sol-top-head">
                <h3>
                  Real World Problem - Solution example{" "}
                  <span className="gradient-heading">
                    Predicting Customer Churn
                  </span>
                </h3>
              </div>
              <div className="solution-img">
                <Image
                  src={predictingChrun}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  To predict customer churn in a business. Customer churn refers
                  to the phenomenon where customers stop doing business with a
                  company or switch to a competitor.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head">The Solution </h3>
                <p className="sol-top-para">
                  By using historical data on customer behavior and interactions
                  with the company, a predictive model can be developed to
                  identify patterns that indicate when a customer is likely to
                  churn. The model can then be used to predict which customers
                  are at high risk of leaving, allowing the company to take
                  proactive measures to retain them.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="sol-top-head">
                <h3>
                  Real World Problem - Solution example{" "}
                  <span className="gradient-heading">Fraud Detection</span>
                </h3>
              </div>
              <div className="solution-img">
                <Image
                  src={fraudDetection}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  Predict fraud detection in financial transactions. Fraudulent
                  activities can result in significant financial losses for both
                  businesses and individuals.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Solution </h3>

                <p className="sol-top-para">
                  Predictive analytics can be used to analyze historical
                  transactional data and identify patterns and anomalies that
                  could indicate fraudulent activity. Machine learning
                  algorithms can then be trained on this data to detect similar
                  patterns in real-time transactions and flag them for further
                  investigation.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ---- // End of networks ----- */}
      {/* Start FAQ  */}
      <section className="faqs-main">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="network-top-head">
                <h3 className="section-heading extra-small-gradient">
                  {t("NFT_DEVELOPMENT.FAQ_head")}
                </h3>
                <h5 className="banner-para">
                  {t("NFT_DEVELOPMENT.FAQ_sub_head")}
                </h5>
              </div>
              <div className="faq-contents-wraper">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {t("NFT_DEVELOPMENT.faq_q_1")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("NFT_DEVELOPMENT.faq_a_1")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {t("NFT_DEVELOPMENT.faq_q_2")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("NFT_DEVELOPMENT.faq_a_2")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {t("NFT_DEVELOPMENT.faq_q_3")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("NFT_DEVELOPMENT.faq_a_3")}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* // End of FAQ  */}
      <Footer />
    </div>
  );
}

export default NFTDevelopment;
