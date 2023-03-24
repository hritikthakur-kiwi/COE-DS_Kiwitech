import {
  cosnumerBehavior,
  iconGame,
  iconLinkdin,
  iconTelegram,
  iconTwitter,
  improveCust,
  increasedBussiness,
  personalisedRec,
  reduCus,
  targetCust,
  recomFacilitateIcon1,
  recomFacilitateIcon2,
  recomFacilitateIcon3,
  recomFacilitateIcon4,
  recomFacilitateIcon5,
  recomFacilitateIcon6,
  recomFacilitateIcon7,
  recomFacilitateIcon8,
  recomFacilitateIcon9,
  recomFacilitateIcon10,
  PersonalizedRecommendations,
  personalizedRecommEnter,
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
                  {t("CRYPTO_CURRENCY_DEV.head_section_title")}
                </h3>
                <h5 className="section-sub-heading text-white">
                  {t("CRYPTO_CURRENCY_DEV.head_section_subhead")}
                </h5>
                <p className="nft-banner-para">
                  {t("CRYPTO_CURRENCY_DEV.head_section_para")}
                </p>
                <p className="small-text">
                  {t("CRYPTO_CURRENCY_DEV.join_our_community")}
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
        <div className="ngt-content">
          <Carousel
            autoPlay={false}
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
                  <Image src={improveCust} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("CRYPTO_CURRENCY_DEV.carousel_section_head_1")}
                  </h4>
                  <p className="nft-text-para">
                    {t("CRYPTO_CURRENCY_DEV.carousel_section_text_1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={increasedBussiness} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("CRYPTO_CURRENCY_DEV.carousel_section_head_2")}
                  </h4>
                  <p className="nft-text-para">
                    {t("CRYPTO_CURRENCY_DEV.carousel_section_text_2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={cosnumerBehavior} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("CRYPTO_CURRENCY_DEV.carousel_section_head_3")}
                  </h4>
                  <p className="nft-text-para">
                    {t("CRYPTO_CURRENCY_DEV.carousel_section_text_3")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={reduCus} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("CRYPTO_CURRENCY_DEV.carousel_section_head_4")}
                  </h4>
                  <p className="nft-text-para">
                    {t("CRYPTO_CURRENCY_DEV.carousel_section_text_4")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={targetCust} alt="user" />
                </div>
                <div className="nft-review">
                  <p className="nft-text-para">
                    <h4 className="nft-review-head">
                      {t("CRYPTO_CURRENCY_DEV.carousel_section_head_5")}
                    </h4>
                    {t("CRYPTO_CURRENCY_DEV.carousel_section_text_5")}
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
                  {t("CRYPTO_CURRENCY_DEV.nft_standards_sec_head")}
                </h3>
                <h5 className="banner-para">
                  {t("CRYPTO_CURRENCY_DEV.nft_standards_sec_sub_head")}
                </h5>
              </div>
              <div className="standard-content-main">
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon1} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_1")}
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon2} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_2")}
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon3} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_3")}
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon4} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_4")}
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon5} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_5")}
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon6} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_6")}
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon7} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_7")}
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon8} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_8")}
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon9} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_9")}
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={recomFacilitateIcon10} alt="" />
                  </div>
                  <div>
                    <p className="standard-para">
                      {t("CRYPTO_CURRENCY_DEV.nft_standard_text_10")}
                    </p>
                  </div>
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
            <Col md={12} className="mt-4">
              <div className="sol-top-head">
                <h3> Real World Problem: Solution example</h3>
              </div>
            </Col>
            <Col md={6} className="mt-4">
              <div className="sol-top-head">
                <h3 className="gradient-heading mb-4">
                  Personalized Recommendations
                </h3>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  The issue of product discovery and personalized
                  recommendations in e-commerce.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head">The Solution </h3>
                <p className="sol-top-para">
                  With the vast amount of products available online, customers
                  can become overwhelmed and have difficulty finding products
                  that align with their preferences and needs. A recommendation
                  system can help to solve this problem by analyzing customer
                  data and making personalized recommendations based on their
                  browsing and purchase history, as well as other factors such
                  as product popularity and customer reviews.
                </p>
              </div>
            </Col>
            <Col md={6} className="mt-4">
              <div className="solution-img p-0">
                <Image
                  src={PersonalizedRecommendations}
                  alt="Personalized Recommendations"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6} className="mt-5 pt-3 order-two f-des">
              <div className="solution-img p-0">
                <Image
                  src={personalizedRecommEnter}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6} className="mt-5 pt-3 order-one f-des">
              <div className="sol-top-head">
                <h3 className="gradient-heading mb-4">
                  Personalized Recommendation in Entertainment
                </h3>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  The challenge of content discovery and personalization in the
                  entertainment industry.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Solution </h3>

                <p className="sol-top-para">
                  With the vast amount of movies, TV shows, music, and other
                  forms of content available online, users can have difficulty
                  finding content that aligns with their preferences and
                  interests. A recommendation system can help to solve this
                  problem by analyzing user data and making personalized
                  recommendations based on their viewing or listening history,
                  as well as other factors such as genre preferences and
                  ratings.
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
                  {t("CRYPTO_CURRENCY_DEV.FAQ_head")}
                </h3>
                <h5 className="banner-para">
                  {t("CRYPTO_CURRENCY_DEV.FAQ_sub_head")}
                </h5>
              </div>
              <div className="faq-contents-wraper">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {t("CRYPTO_CURRENCY_DEV.faq_q_1")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("CRYPTO_CURRENCY_DEV.faq_a_1")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {t("CRYPTO_CURRENCY_DEV.faq_q_2")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("CRYPTO_CURRENCY_DEV.faq_a_2")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {t("CRYPTO_CURRENCY_DEV.faq_q_3")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("CRYPTO_CURRENCY_DEV.faq_a_3")}
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
