import Footer from "@/components/Footer";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import { cryptoImg } from "@/assets/images/images";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  mediaDAOs,
  socialDAOs,
  grantDAOs,
  collectorDAOs,
  protocolDAO,
  investmentDAOs,
  contract,
  guidance,
  dappDevelopment,
  traditionalImg,
  programming,
  daoToken,
  docContract,
  blockchain,
  box,
  daoWhyChoose,
  daoUseCases,
} from "@/assets/images/images";
import { useTranslation } from "react-i18next";

function DaoDevelopment(props) {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <section className="crypto-currency-banner">
        <div className="container">
          <Row>
            <Col
              md={7}
              className="order-two d-flex flex-column justify-content-center"
            >
              <div className="crypto-currency-banner-left p-0">
                <h3 className="gradient-heading">
                {t("DAO_DEVELOPMENT.head")}
                </h3>
                <p className="top-para pt-18">
                {t("DAO_DEVELOPMENT.subhead")}
                </p>
              </div>
            </Col>
            <Col
              md={5}
              className="order-one d-flex flex-column justify-content-center"
            >
              <div className="crypto-currency-banner-right">
                <Image src={cryptoImg} alt="Crypto" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ---- Start Dao Services ----- */}
      <section className="dao-services-wrapper">
        <div className="container">
          <Row>
            <h3 className="gradient-heading">{t("DAO_DEVELOPMENT.our_service_head")}</h3>
            <Col md={4}>
              <div className="services-item">
                <Image src={contract} alt="smart contract" />
                <h4 className="service-item-title">{t("DAO_DEVELOPMENT.service_head_1")}</h4>
                <p className="service-item-des">
                {t("DAO_DEVELOPMENT.service_text_1")}
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="services-item">
                <Image src={guidance} alt="smart contract" />
                <h4 className="service-item-title">{t("DAO_DEVELOPMENT.service_head_2")}</h4>
                <p className="service-item-des">
                {t("DAO_DEVELOPMENT.service_text_2")}
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="services-item">
                <Image src={dappDevelopment} alt="smart contract" />
                <h4 className="service-item-title">{t("DAO_DEVELOPMENT.service_head_3")}</h4>
                <p className="service-item-des">
                {t("DAO_DEVELOPMENT.service_text_3")}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ---- // End of dao services ----- */}
      <section className="dao-traditional-wrapper">
        <div className="container">
          <Row>
            <Col md={8} className="d-flex flex-column justify-content-center">
              <div className="traditional-left">
                <h3 className="gradient-heading">
                  {" "}
                  {t("DAO_DEVELOPMENT.traditional_sec_head")}
                </h3>
                <p className="top-para">
                  {" "}
                  {t("DAO_DEVELOPMENT.traditional_sec_text")}
                </p>
              </div>
            </Col>
            <Col md={4} className="d-flex flex-column justify-content-center">
              <div className="traditional-right">
                <Image
                  src={traditionalImg}
                  alt="smart contract"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="dao-decentralized-wrapper">
        <div className="container">
          <div className="sol-top-head">
            <h3>
            {t("DAO_DEVELOPMENT.feature_sec_head_1")}{" "}
              <h3 className="gradient-heading">
              {t("DAO_DEVELOPMENT.feature_sec_head_2")}
              </h3>
            </h3>
          </div>
          <Row>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <div className="decent-item">
                <div className="decent-item-img">
                  <Image src={programming} alt="source code" />
                </div>
                <div className="decent-item-content">
                  <h4 className="decent-item-content-title">
                  {t("DAO_DEVELOPMENT.feature_head_1")}
                  </h4>
                  <p className="service-item-des">
                  {t("DAO_DEVELOPMENT.feature_text_1")}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <div className="decent-item">
                <div className="decent-item-img">
                  <Image src={daoToken} alt="source code" />
                </div>
                <div className="decent-item-content">
                  <h4 className="decent-item-content-title">{t("DAO_DEVELOPMENT.feature_head_2")}</h4>
                  <p className="service-item-des">
                  {t("DAO_DEVELOPMENT.feature_text_2")}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <div className="decent-item">
                <div className="decent-item-img">
                  <Image src={docContract} alt="source code" />
                </div>
                <div className="decent-item-content">
                  <h4 className="decent-item-content-title">
                  {t("DAO_DEVELOPMENT.feature_head_3")}{" "}
                  </h4>
                  <p className="service-item-des">
                  {t("DAO_DEVELOPMENT.feature_text_3")}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <div className="decent-item">
                <div className="decent-item-img">
                  <Image src={blockchain} alt="source code" />
                </div>
                <div className="decent-item-content">
                  <h4 className="decent-item-content-title">
                  {t("DAO_DEVELOPMENT.feature_head_4")}
                  </h4>
                  <p className="service-item-des">
                  {t("DAO_DEVELOPMENT.feature_text_4")}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="dao-work-wrapper">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="dao-work-content text-center">
                <h3 className="gradient-heading">{t("DAO_DEVELOPMENT.how_dao_head")}</h3>
                <p className="top-para">
                {t("DAO_DEVELOPMENT.how_dao_text")}
                </p>
                <div className="dao-work-inner">
                  <div className="dao-work-item">
                    <div className="dao-work-list">
                      {t("DAO_DEVELOPMENT.how_dao_1")}
                    </div>
                    <span className="list-no">1</span>
                  </div>
                  <div className="dao-work-item">
                    <div className="dao-work-list">
                      {t("DAO_DEVELOPMENT.how_dao_2")}
                    </div>
                    <span className="list-no">2</span>
                  </div>
                  <div className="dao-work-item">
                    <div className="dao-work-list">
                      {t("DAO_DEVELOPMENT.how_dao_3")}
                    </div>
                    <span className="list-no">3</span>
                  </div>
                  <div className="dao-work-item">
                    <div className="dao-work-list">
                      {t("DAO_DEVELOPMENT.how_dao_4")}
                    </div>
                    <span className="list-no">4</span>
                  </div>
                  <div className="dao-work-item">
                    <div className="dao-work-list">
                      {t("DAO_DEVELOPMENT.how_dao_5")}
                    </div>
                    <span className="list-no">5</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="dao-why-choose-wrapper">
        <div className="container">
          <Row>
            <Col md={8} className="d-flex flex-column justify-content-center">
              <div className="traditional-left">
                <h3 className="gradient-heading">
                  {" "}
                  {t("DAO_DEVELOPMENT.why_dao_head")}
                </h3>
                <p className="top-para">
                {t("DAO_DEVELOPMENT.why_dao_para")}
                </p>
              </div>
            </Col>
            <Col md={4} className="d-flex flex-column justify-content-center">
              <div className="traditional-right">
                <Image
                  src={daoWhyChoose}
                  alt="smart contract"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ---- Start Dao Type ----- */}
      <section className="network-wrapper dao-type-main dao-existing-wrapper">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="network-top-head text-center">
                <h3 className="gradient-heading">{t("DAO_DEVELOPMENT.existing_dao_head")}</h3>
              </div>
            </Col>
            <Col md={4}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-img">
                    <Image src={protocolDAO} alt="Network" />
                  </div>
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">{t("DAO_DEVELOPMENT.existing_dao_head_1")}</h2>
                    <p className="network-item-para">
                    {t("DAO_DEVELOPMENT.existing_dao_text_1")}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-img">
                    <Image src={collectorDAOs} alt="Network" />
                  </div>
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">{t("DAO_DEVELOPMENT.existing_dao_head_2")}</h2>
                    <p className="network-item-para">
                    {t("DAO_DEVELOPMENT.existing_dao_text_2")}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-img">
                    <Image src={grantDAOs} alt="Network" />
                  </div>
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">{t("DAO_DEVELOPMENT.existing_dao_head_3")}</h2>
                    <p className="network-item-para">
                    {t("DAO_DEVELOPMENT.existing_dao_text_3")}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-img">
                    <Image src={socialDAOs} alt="Network" />
                  </div>
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">{t("DAO_DEVELOPMENT.existing_dao_head_4")}</h2>
                    <p className="network-item-para">
                    {t("DAO_DEVELOPMENT.existing_dao_text_4")}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-img">
                    <Image src={mediaDAOs} alt="Network" />
                  </div>
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">{t("DAO_DEVELOPMENT.existing_dao_head_5")}</h2>
                    <p className="network-item-para">
                    {t("DAO_DEVELOPMENT.existing_dao_text_5")}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-img">
                    <Image src={investmentDAOs} alt="Network" />
                  </div>
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">{t("DAO_DEVELOPMENT.existing_dao_head_6")}</h2>
                    <p className="network-item-para">
                    {t("DAO_DEVELOPMENT.existing_dao_text_6")}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ---- // End of dao type ----- */}

      <section className="dao-why-choose-wrapper pb-0">
        <div className="container">
          <Row>
            <Col md={8} className="d-flex flex-column">
              <h3 className="gradient-heading">{t("DAO_DEVELOPMENT.dao_usecase_head")}</h3>
              <div className="dao-use-cases-item mt-30">
                <div className="case-items">
                  <Image src={box} alt="box" />
                  <h4>{t("DAO_DEVELOPMENT.useCase_head_1")}</h4>
                </div>
                <p className="top-para">
                {t("DAO_DEVELOPMENT.useCase_text_1")}
                </p>
              </div>
              <div className="dao-use-cases-item mt-30">
                <div className="case-items">
                  <Image src={box} alt="box" />
                  <h4>{t("DAO_DEVELOPMENT.useCase_head_2")}</h4>
                </div>
                <p className="top-para">
                {t("DAO_DEVELOPMENT.useCase_text_2")}
                </p>
              </div>
              <div className="dao-use-cases-item mt-30">
                <div className="case-items">
                  <Image src={box} alt="box" />
                  <h4>{t("DAO_DEVELOPMENT.useCase_head_3")}</h4>
                </div>
                <p className="top-para">
                {t("DAO_DEVELOPMENT.useCase_text_3")}
                </p>
              </div>
            </Col>
            <Col md={4} className="d-flex flex-column justify-content-center">
              <div className="traditional-right">
                <Image
                  src={daoUseCases}
                  alt="smart contract"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="dao-platform">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="sol-top-head text-center">
                <h3>
                {t("DAO_DEVELOPMENT.steps_involved_head_1")} <br />
                  <span className="gradient-heading">
                  {t("DAO_DEVELOPMENT.steps_involved_head_2")}
                  </span>
                </h3>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="dev-item">
                <div className="dev-item-top ">
                  <span>{t("DAO_DEVELOPMENT.step_head_1")}</span>
                </div>
                <div className="dev-item-para">
                  <span>
                  {t("DAO_DEVELOPMENT.step_text_1")}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="dev-item">
                <div className="dev-item-top dev-item-top2">
                  <span>{t("DAO_DEVELOPMENT.step_head_2")}</span>
                </div>
                <div className="dev-item-para">
                  <span>
                  {t("DAO_DEVELOPMENT.step_text_2")}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="dev-item">
                <div className="dev-item-top dev-item-top3">
                  <span>{t("DAO_DEVELOPMENT.step_head_3")}</span>
                </div>
                <div className="dev-item-para">
                  <span>
                  {t("DAO_DEVELOPMENT.step_text_3")}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="dev-item">
                <div className="dev-item-top dev-item-top4">
                  <span>{t("DAO_DEVELOPMENT.step_head_4")}</span>
                </div>
                <div className="dev-item-para">
                  <span>
                  {t("DAO_DEVELOPMENT.step_text_4")}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

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

export default DaoDevelopment;
