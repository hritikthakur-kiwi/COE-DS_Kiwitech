import {
  detectingFraud,
  enhanceMarketing, fraudDetection, gainInsights, iconGame,
  iconLinkdin,
  iconTelegram,
  iconTwitter, IdentifyTrends, improveOperational, sentimentAnalysis, textAnalytics
} from "@/assets/images/images";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

function textAnalytics(props) {
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
                  {t("DAO_DEVELOPMENT.head_section_title")}
                </h3>
                <h5 className="section-sub-heading text-white">
                  {t("DAO_DEVELOPMENT.head_section_subhead")}
                </h5>
                <p className="nft-banner-para">
                  {t("DAO_DEVELOPMENT.head_section_para")}
                </p>
                <p className="small-text">
                  {t("DAO_DEVELOPMENT.join_our_community")}
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
        {/* <h3 className="section-sub-heading text-white">{t("DAO_DEVELOPMENT.head_section_title")}</h3> */}
        <div className="ngt-content">
          <Carousel
            autoPlay={true}
            swipeable={true}
            draggable={false}
            arrows={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            transitionDuration={300}
            partialVisible={true}
          >
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={gainInsights} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("DAO_DEVELOPMENT.carousel_section_head_1")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DAO_DEVELOPMENT.carousel_section_text_1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={enhanceMarketing} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("DAO_DEVELOPMENT.carousel_section_head_2")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DAO_DEVELOPMENT.carousel_section_text_2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={improveOperational} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("DAO_DEVELOPMENT.carousel_section_head_3")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DAO_DEVELOPMENT.carousel_section_text_3")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={IdentifyTrends} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("DAO_DEVELOPMENT.carousel_section_head_4")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DAO_DEVELOPMENT.carousel_section_text_4")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={detectingFraud} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("DAO_DEVELOPMENT.carousel_section_head_5")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DAO_DEVELOPMENT.carousel_section_text_5")}
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* ---- we facilate ----- */}
      <section className="standard-main">
        <div className="container-fluid side-gap">
          <Row>
            <Col md={12}>
              <div className="network-top-head">
                <h3 className="section-heading extra-small-gradient">
                  {t("DAO_DEVELOPMENT.nft_standards_sec_head")}
                </h3>
                <h5 className="banner-para">
                  {t("DAO_DEVELOPMENT.nft_standards_sec_sub_head")}
                </h5>
              </div>
              <div className="standard-content-main">
                <div className="standard-item std-item1">
                  <p className="standard-para">
                    {t("DAO_DEVELOPMENT.nft_standard_text_1")}
                  </p>
                </div>
                <div className="standard-item std-item2">
                  <p className="standard-para">
                    {t("DAO_DEVELOPMENT.nft_standard_text_2")}
                  </p>
                </div>
                <div className="standard-item std-item3">
                  <p className="standard-para">
                    {t("DAO_DEVELOPMENT.nft_standard_text_3")}
                  </p>
                </div>
                <div className="standard-item std-item4">
                  <p className="standard-para">
                    {t("DAO_DEVELOPMENT.nft_standard_text_4")}
                  </p>
                </div>
                <div className="standard-item std-item1">
                  <p className="standard-para">
                    {t("DAO_DEVELOPMENT.nft_standard_text_5")}
                  </p>
                </div>
                <div className="standard-item std-item2">
                  <p className="standard-para">
                    {t("DAO_DEVELOPMENT.nft_standard_text_6")}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* -----  // End of we facilate ----- */}

      {/* -----  // start problem ----- */}
      <section className="solution-provide-wrapper">
        <div className="container">
          <Row>
            <Col md={6}>
              <div className="sol-top-head">
                <h3>
                  Real World Problem - Solution example{" "}
                  <span className="gradient-heading">Sentiment Analysis</span>
                </h3>
              </div>
              <div className="solution-img">
                <Image
                  src={sentimentAnalysis}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  A retailer is struggling to keep up with the high volume of
                  customer feedback data generated from their online reviews and
                  social media channels. They want to understand customer
                  sentiment and preferences better to improve their products and
                  services, but manually processing and analyzing this data is
                  time-consuming and resource-intensive. They need a solution
                  that can automate the analysis of customer feedback data and
                  provide insights that can drive business decisions.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head">The Solution </h3>
                <p className="sol-top-para">
                  Text Analytics can help address this problem by automating the
                  analysis of customer feedback data, including sentiment
                  analysis and topic modeling, and providing insights that can
                  help a retailer improve their products and services.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="sol-top-head">
                <h3>
                  Real World Problem - Solution example{" "}
                  <span className="gradient-heading">Detect and Prevent Fraud Transaction Data</span>
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
                  Any Bank, any financial institution, is struggling to detect
                  and prevent fraud in their transaction data. They currently
                  rely on manual reviews to identify potential fraud, but this
                  process is time-consuming and often misses fraudulent
                  activity. They need a solution that can automate the detection
                  of potential fraud and provide real-time alerts to their fraud
                  prevention team.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Solution </h3>

                <p className="sol-top-para">
                  Text Analytics can help address this problem by automating the
                  analysis of transaction data and detecting potential
                  fraudulent activity based on patterns and anomalies in the
                  data. With Text Analytics, Any Bank can quickly identify
                  potential fraud and receive real-time alerts, allowing them to
                  take action quickly and prevent losses.
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
                  {t("DAO_DEVELOPMENT.FAQ_head")}
                </h3>
                <h5 className="banner-para">
                  {t("DAO_DEVELOPMENT.FAQ_sub_head")}
                </h5>
              </div>
              <div className="faq-contents-wraper">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {t("DAO_DEVELOPMENT.faq_q_1")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("DAO_DEVELOPMENT.faq_a_1")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {t("DAO_DEVELOPMENT.faq_q_2")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("DAO_DEVELOPMENT.faq_a_2")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {t("DAO_DEVELOPMENT.faq_q_3")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("DAO_DEVELOPMENT.faq_a_3")}
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

export default textAnalytics;
