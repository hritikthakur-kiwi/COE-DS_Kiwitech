import {
  iconGame,
  iconLinkdin,
  iconTelegram,
  iconTwitter,
  predictiveImg
} from "@/assets/images/images";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import Header from "../components/Header";

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

function CryptoCurrencyDevelopment(props) {
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
                  {t("DEFI_SERVICES.head_section_title")}
                </h3>
                <h5 className="section-sub-heading text-white">
                  {t("DEFI_SERVICES.head_section_subhead")}
                </h5>
                <p className="nft-banner-para">
                  {t("DEFI_SERVICES.head_section_para")}
                </p>
                <p className="small-text">
                  {t("DEFI_SERVICES.join_our_community")}
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
        {/* <h3 className="section-sub-heading text-white">{t("DEFI_SERVICES.head_section_title")}</h3> */}
        <div className="ngt-content">
          <Carousel
            autoPlay={true}
            swipeable={true}
            draggable={false}
            arrows={true}
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
                  <Image src={predictiveImg} alt="user" />
                </div>
                <div className="nft-review">
                <h4 className="nft-review-head">
                    {t("DEFI_SERVICES.carousel_section_head_1")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DEFI_SERVICES.carousel_section_text_1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={predictiveImg} alt="user" />
                </div>
                <div className="nft-review">
                <h4 className="nft-review-head">
                    {t("DEFI_SERVICES.carousel_section_head_2")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DEFI_SERVICES.carousel_section_text_2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={predictiveImg} alt="user" />
                </div>
                <div className="nft-review">
                <h4 className="nft-review-head">
                    {t("DEFI_SERVICES.carousel_section_head_3")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DEFI_SERVICES.carousel_section_text_3")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={predictiveImg} alt="user" />
                </div>
                <div className="nft-review">
                <h4 className="nft-review-head">
                    {t("DEFI_SERVICES.carousel_section_head_4")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DEFI_SERVICES.carousel_section_text_4")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={predictiveImg} alt="user" />
                </div>
                <div className="nft-review">
                <h4 className="nft-review-head">
                    {t("DEFI_SERVICES.carousel_section_head_5")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DEFI_SERVICES.carousel_section_text_5")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={predictiveImg} alt="user" />
                </div>
                <div className="nft-review">
                <h4 className="nft-review-head">
                    {t("DEFI_SERVICES.carousel_section_head_6")}
                  </h4>
                  <p className="nft-text-para">
                    {t("DEFI_SERVICES.carousel_section_text_6")}
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* ---- Start We facilitate ----- */}
      <section className="standard-main">
        <div className="container-fluid side-gap">
          <Row>
            <Col md={12}>
              <div className="network-top-head">
                <h3 className="section-heading extra-small-gradient">
                  {t("DEFI_SERVICES.nft_standards_sec_head")}
                </h3>
                <h5 className="banner-para">
                  {t("DEFI_SERVICES.nft_standards_sec_sub_head")}
                </h5>
              </div>
              <div className="standard-content-main">
                <div className="standard-item std-item1">
                  <p className="standard-para">
                    {t("DEFI_SERVICES.nft_standard_text_1")}
                  </p>
                </div>
                <div className="standard-item std-item2">
                  <p className="standard-para">
                    {t("DEFI_SERVICES.nft_standard_text_2")}
                  </p>
                </div>
                <div className="standard-item std-item3">
                  <p className="standard-para">
                    {t("DEFI_SERVICES.nft_standard_text_3")}
                  </p>
                </div>
                <div className="standard-item std-item4">
                  <p className="standard-para">
                    {t("DEFI_SERVICES.nft_standard_text_4")}
                  </p>
                </div>
                <div className="standard-item std-item1">
                  <p className="standard-para">
                    {t("DEFI_SERVICES.nft_standard_text_5")}
                  </p>
                </div>
                <div className="standard-item std-item2">
                  <p className="standard-para">
                    {t("DEFI_SERVICES.nft_standard_text_6")}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ---- // End of We facilitate ----- */}

      <section className="solution-provide-wrapper">
        <div className="container">
          <Row>
            <Col md={6}>
              <div className="sol-top-head">
                <h3>
                  Real World Problem - Solution example{" "}
                  <span className="gradient-heading">Compare Performances</span>
                </h3>
              </div>
              <div className="solution-img">
                <Image
                  src={predictiveImg}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  A retail chain has multiple locations and is struggling to
                  understand the sales performance of each store. They have
                  sales data from each location but it is difficult to compare
                  the performance of each store and identify trends or patterns.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head">The Solution </h3>
                <p className="sol-top-para">
                  By using data visualization, the retail chain can create a
                  dashboard that provides a clear view of the sales performance
                  of each store. This can be done by creating visualizations
                  such as bar charts or heat maps that compare the sales data
                  across different locations. The data can also be broken down
                  by product category or time period to identify trends and
                  patterns. This information can be used to optimize sales
                  strategies, improve inventory management, and increase
                  revenue.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="sol-top-head">
                <h3>
                  Real World Problem - Solution example{" "}
                  <span className="gradient-heading">
                    Analyze Patient Outcomes
                  </span>
                </h3>
              </div>
              <div className="solution-img">
                <Image
                  src={predictiveImg}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  A healthcare organization is struggling to understand patient
                  outcomes and identify areas for improvement. They have a large
                  amount of patient data but it is difficult to analyze and
                  identify trends or patterns.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Solution </h3>

                <p className="sol-top-para">
                  By using data visualization, the healthcare organization can
                  create a dashboard that provides a clear view of patient
                  outcomes across different demographics, medical conditions,
                  and treatments. This can be done by creating visualizations
                  such as scatter plots or heat maps that compare patient data
                  across different categories. The data can also be broken down
                  by time period or geographical location to identify trends and
                  patterns.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ---- // End of networks ----- */}
      {/* ---- Start Standards ----- */}

      {/* -----  // End of standards ----- */}
      {/* Start FAQ  */}
      <section className="faqs-main">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="network-top-head">
                <h3 className="section-heading extra-small-gradient">
                  {t("DEFI_SERVICES.FAQ_head")}
                </h3>
                <h5 className="banner-para">
                  {t("DEFI_SERVICES.FAQ_sub_head")}
                </h5>
              </div>
              <div className="faq-contents-wraper">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {t("DEFI_SERVICES.faq_q_1")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("DEFI_SERVICES.faq_a_1")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {t("DEFI_SERVICES.faq_q_2")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("DEFI_SERVICES.faq_a_2")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {t("DEFI_SERVICES.faq_q_3")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("DEFI_SERVICES.faq_a_3")}
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

export default CryptoCurrencyDevelopment;
