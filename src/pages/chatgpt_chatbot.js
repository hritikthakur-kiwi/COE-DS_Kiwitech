import {
  automateHrP, datacollection, iconGame,
  iconLinkdin,
  iconTelegram,
  iconTwitter,
  improveCustumer, increasedEfficiency,
  personalization,
  providingCust,
  scalability
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
                  {t("CHATGPT_CHATBOT.head_section_title")}
                </h3>
                <h5 className="section-sub-heading text-white">
                  {t("CHATGPT_CHATBOT.head_section_subhead")}
                </h5>
                <p className="nft-banner-para">
                  {t("CHATGPT_CHATBOT.head_section_para")}
                </p>
                <p className="small-text">
                  {t("CHATGPT_CHATBOT.join_our_community")}
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
        {/* <h3 className="section-sub-heading text-white">{t("CHATGPT_CHATBOT.head_section_title")}</h3> */}
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
                  <Image src={improveCustumer} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("CHATGPT_CHATBOT.carousel_section_head_1")}
                  </h4>
                  <p className="nft-text-para">
                    {t("CHATGPT_CHATBOT.carousel_section_text_1")}
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
                    {t("CHATGPT_CHATBOT.carousel_section_head_2")}
                  </h4>
                  <p className="nft-text-para">
                    {t("CHATGPT_CHATBOT.carousel_section_text_2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={personalization} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("CHATGPT_CHATBOT.carousel_section_head_3")}
                  </h4>
                  <p className="nft-text-para">
                    {t("CHATGPT_CHATBOT.carousel_section_text_3")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={scalability} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("CHATGPT_CHATBOT.carousel_section_head_4")}
                  </h4>
                  <p className="nft-text-para">
                    {t("CHATGPT_CHATBOT.carousel_section_text_4")}
                  </p>
                </div>
              </div>
            </div>
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={datacollection} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">
                    {t("CHATGPT_CHATBOT.carousel_section_head_5")}
                  </h4>
                  <p className="nft-text-para">
                    {t("CHATGPT_CHATBOT.carousel_section_text_5")}
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
                    Providing Customer Support l
                  </span>
                </h3>
              </div>
              <div className="solution-img">
                <Image
                  src={providingCust}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  Providing customer support for a large e-commerce website.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head">The Solution </h3>
                <p className="sol-top-para">
                  With a vast customer base, it becomes difficult to address all
                  the queries and concerns of each customer in a timely manner.
                  By implementing a chatbot powered by ChatGPT, customers can
                  receive instant responses to their questions and concerns,
                  reducing the need for human intervention and improving overall
                  customer satisfaction. The chatbot can also learn from
                  customer interactions and become smarter over time, providing
                  more accurate and helpful responses.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="sol-top-head">
                <h3>
                  Real World Problem - Solution example{" "}
                  <span className="gradient-heading">
                    Automating HR Processes
                  </span>
                </h3>
              </div>
              <div className="solution-img">
                <Image
                  src={automateHrP}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> Problem </h3>
                <p className="sol-top-para">
                  Automating HR processes in a company.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> Solution </h3>

                <p className="sol-top-para">
                  The chatbot can be designed to handle routine tasks such as
                  employee onboarding, answering employee queries related to HR
                  policies, and scheduling interviews. By automating such tasks,
                  HR teams can free up their time and focus on more strategic
                  tasks that require human intervention. Additionally, ChatGPT
                  can be used to provide personalized career guidance and
                  training recommendations to employees, based on their career
                  goals and skill sets.
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
                  {t("CHATGPT_CHATBOT.FAQ_head")}
                </h3>
                <h5 className="banner-para">
                  {t("CHATGPT_CHATBOT.FAQ_sub_head")}
                </h5>
              </div>
              <div className="faq-contents-wraper">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {t("CHATGPT_CHATBOT.faq_q_1")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("CHATGPT_CHATBOT.faq_a_1")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {t("CHATGPT_CHATBOT.faq_q_2")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("CHATGPT_CHATBOT.faq_a_2")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {t("CHATGPT_CHATBOT.faq_q_3")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("CHATGPT_CHATBOT.faq_a_3")}
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
