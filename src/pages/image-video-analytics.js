import {
  betterDecision, competitveAdv, enhanceSecurity, iconGame,
  iconLinkdin,
  iconTelegram,
  iconTwitter, improveCust,
  increasedEfficiency, securityPersonal, trafficPattern
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
                  {t("ENTERPRICE_SOLUTIONS.head_section_title")}
                </h3>
                <h5 className="section-sub-heading text-white">
                  {t("ENTERPRICE_SOLUTIONS.head_section_subhead")}
                </h5>
                <p className="nft-banner-para">
                  {t("ENTERPRICE_SOLUTIONS.head_section_para")}
                </p>
                <p className="small-text">
                  {t("ENTERPRICE_SOLUTIONS.join_our_community")}
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
        {/* <h3 className="section-sub-heading text-white">{t("ENTERPRICE_SOLUTIONS.head_section_title")}</h3> */}
        <div className="ngt-content">
          <Carousel
            autoPlay={false}
            swipeable={true}
            draggable={true}
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
                  <Image src={improveCust} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_head_1")}
                  </h4>
                  <p className="nft-text-para">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_text_1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={increasedEfficiency} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_head_2")}
                  </h4>
                  <p className="nft-text-para">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_text_2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={enhanceSecurity} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_head_3")}
                  </h4>
                  <p className="nft-text-para">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_text_3")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={betterDecision} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_head_4")}
                  </h4>
                  <p className="nft-text-para">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_text_4")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={competitveAdv} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_head_5")}
                  </h4>
                  <p className="nft-text-para">
                    {t("ENTERPRICE_SOLUTIONS.carousel_section_text_5")}
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
                  <span className="gradient-heading">Security Personnel</span>
                </h3>
              </div>
              <div className="solution-img">
                <Image
                  src={securityPersonal}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  Retail stores lose billions of dollars every year due to
                  theft, and traditional methods of monitoring such as security
                  personnel and cameras can be unreliable and time-consuming. By
                  implementing image and video analytics, retailers can quickly
                  and accurately detect suspicious behavior and identify
                  potential thieves.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head">The Solution </h3>
                <p className="sol-top-para">
                  Image and video analytics can be used to analyze customer
                  behavior, such as tracking movements, analyzing facial
                  expressions, and monitoring body language. This technology can
                  also detect and track specific objects, such as items being
                  removed from shelves, placed in shopping carts, or concealed
                  in bags or pockets.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="sol-top-head">
                <h3>
                  Real World Problem - Solution example{" "}
                  <span className="gradient-heading">
                    Analyzing Traffic Patterns and Behaviors
                  </span>
                </h3>
              </div>
              <div className="solution-img">
                <Image
                  src={trafficPattern}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> Problem </h3>
                <p className="sol-top-para">
                  Traffic congestion and accidents are major issues in many
                  cities around the world. By using image and video analytics,
                  traffic patterns and behaviors can be analyzed in real-time to
                  improve traffic flow and identify potential safety hazards.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> Solution </h3>

                <p className="sol-top-para">
                  Image and video analytics can be used to monitor traffic flow,
                  detect accidents, and identify congestion points. By using
                  machine learning algorithms, the technology can also predict
                  traffic patterns and adjust traffic signals to optimize
                  traffic flow. Furthermore, image and video analytics can be
                  used to identify potential safety hazards such as pedestrians,
                  cyclists, and vehicles driving in the wrong direction. The
                  technology can also detect and analyze driver behavior such as
                  speeding, tailgating, and distracted driving.
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
                  {t("ENTERPRICE_SOLUTIONS.FAQ_head")}
                </h3>
                <h5 className="banner-para">
                  {t("ENTERPRICE_SOLUTIONS.FAQ_sub_head")}
                </h5>
              </div>
              <div className="faq-contents-wraper">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {t("ENTERPRICE_SOLUTIONS.faq_q_1")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("ENTERPRICE_SOLUTIONS.faq_a_1")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {t("ENTERPRICE_SOLUTIONS.faq_q_2")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("ENTERPRICE_SOLUTIONS.faq_a_2")}
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
