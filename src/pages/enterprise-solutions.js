import Footer from "@/components/Footer";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import {
  enterpriseBannerImg,
  umbrella,
  secure,
  target,
  fairness,
  solutionsImg,
  businessGrow,
} from "@/assets/images/images";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

function EnterpriseSolutions(props) {
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
                <h3 className="gradient-heading">Enterprise Solutions</h3>
                <p className="top-para pt-18">
                  Hyperledger Development Services for Decentralized
                  Applications Contact COE experts for your next
                  enterprise-level blockchain-based project.
                </p>
              </div>
            </Col>
            <Col
              md={5}
              className="order-one d-flex flex-column justify-content-center"
            >
              <div className="crypto-currency-banner-right">
                <Image
                  src={enterpriseBannerImg}
                  alt="Crypto"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* why us */}
      <section className="solution-provide-wrapper">
        <div className="container">
          <Row>
            <Col md={4} className="d-flex flex-column justify-content-center">
              <div className="solution-img">
                <Image
                  src={solutionsImg}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={8} className="d-flex flex-column">
              <div className="solutions-details">
                <h3 className="gradient-heading">Why us</h3>
                <p className="top-para">
                  Hyperledger is an umbrella project with different distributed
                  ledger frameworks and libraries. You can use Hyperledger-based
                  blockchain solutions to improve the efficiency, performance,
                  and transactions of your business processes. Its features such
                  as fast customization and problem-solving, easy shift, premium
                  solutions, and low cost of ownership make it unique from other
                  blockchain projects.
                </p>
              </div>
            </Col>

            <Col md={8} className="order-two d-flex flex-column">
              <div className="solutions-details">
                <div className="sol-top-head">
                  <h3>
                    How we help your{" "}
                    <span className="gradient-heading">business grow</span>
                  </h3>
                </div>
                <p className="top-para">
                  We have more than five years of experience in web and mobile
                  application development and four years of experience in
                  blockchain solutions and DApp development. Our
                  industry-specific experts have executed over 50 projects and
                  fulfilled the requirements of over 150 clients. Contact
                  BlockchainX experts for your next enterprise-level
                  blockchain-based project.
                </p>
              </div>
            </Col>
            <Col
              md={4}
              className="order-one d-flex flex-column justify-content-center"
            >
              <div className="solution-img">
                <Image
                  src={businessGrow}
                  alt="solution"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* Features  */}
      <section className="standard-main features-main">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="network-top-head">
                <h3 className="section-heading extra-small-gradient">
                  Features
                </h3>
                <h5 className="banner-para">
                  Features of Hyperledger Blockchain Development
                </h5>
              </div>
              <div className="standard-content-main">
                <div className="standard-item std-item1">
                  <Image className="feature-img" src={target} alt="" />
                  <h4 className="standard-item-head">ERC 721 Token Standard</h4>
                  <p className="standard-para">
                    As a DeFi staking platform development company, we strive to
                    deliver you the best products so that you always get
                    meaningful outcomes from your project.
                  </p>
                </div>
                <div className="standard-item std-item2">
                  <Image className="feature-img" src={fairness} alt="" />
                  <h4 className="standard-item-head">ERC 998 Token Standard</h4>
                  <p className="standard-para">
                    Hyperledger is scalable and transparent, which means you can
                    process your smart contract over a public or permissioned
                    blockchain network.
                  </p>
                </div>
                <div className="standard-item std-item3">
                  <Image className="feature-img" src={secure} alt="" />
                  <h4 className="standard-item-head">
                    ERC 1155 Token Standard
                  </h4>
                  <p className="standard-para">
                    Hyperledger supports businesses to reduce the cost and
                    hardship of legal transactions happening on open-source
                    platforms.
                  </p>
                </div>
                <div className="standard-item std-item4">
                  <Image className="feature-img" src={umbrella} alt="" />
                  <h4 className="standard-item-head">ERC 721 Token Standard</h4>
                  <p className="standard-para">
                    Hyperledger has several frameworks and tools. There are many
                    options you can choose from to build the right solutions for
                    your particular use case.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* End of Features  */}

      {/* ---- Start Industries ----- */}
      <section className="network-wrapper">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="network-top-head">
                <h3 className="section-heading extra-small-gradient">
                  Industries
                </h3>
                <h5 className="banner-para">
                  Our Effective Services for NFT Development Use Cases
                </h5>
              </div>
            </Col>
            <Col md={6}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">
                      Supply Chain Management
                    </h2>
                    <p className="network-item-para">
                      Our NFT development services let you create your NFTs in
                      any network of your choosing.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">Healthcare</h2>
                    <p className="network-item-para">
                      Ensure security for data such as medical records and
                      automate multiple processes through smart contracts.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">
                      Identity Management
                    </h2>
                    <p className="network-item-para">
                      Create digital identities for your employees and manage
                      them seamlessly with a solution such as Hyperledger Indy.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">Financial Services</h2>
                    <p className="network-item-para">
                      Make financial transitions highly secure and immutable and
                      offer amazing FinTech products and services.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">Real Estate</h2>
                    <p className="network-item-para">
                      You can tokenize real estate and even allow users to buy
                      fractions of your property through blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="network-main-content">
                <div className="network-item">
                  <div className="network-inner-content">
                    <h2 className="network-item-heading">E-Commerce</h2>
                    <p className="network-item-para">
                      Build a highly secure and sustainable e-commerce platform
                      that can even be crypto-enabled for payments.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ---- // End of industries ----- */}

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
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {t("ENTERPRICE_SOLUTIONS.faq_q_3")}
                    </Accordion.Header>
                    <Accordion.Body>
                      {t("ENTERPRICE_SOLUTIONS.faq_a_3")}
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

export default EnterpriseSolutions;
