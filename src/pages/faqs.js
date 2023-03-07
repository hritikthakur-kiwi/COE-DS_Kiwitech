import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

function Faqs(props) {
  const { t } = useTranslation("FAQ_PAGE");
  const faqItems = [];
  for (let i = 1; i <= 15; i++) {
    faqItems.push(
      <Accordion.Item eventKey={i-1} key={i}>
        <Accordion.Header>
          {t(`FAQ_PAGE.question-${i}`)}
        </Accordion.Header>
        <Accordion.Body>
          {t(`FAQ_PAGE.answer-${i}`)}
        </Accordion.Body>
      </Accordion.Item>
    );
  }

  return (
    <div>
      <Header />
      <section className="nft-development-banner">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="text-center">
                <h3 className="gradient-heading">{t("FAQ_PAGE.head")}</h3>
                <p className="nft-banner-para">{t("FAQ_PAGE.subHead")}</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* Start FAQ  */}
      <section className="faqs-main">
        <div className="container-fluid side-gap">
          <Row>
            <Col md={12}>
              <div className="faq-contents-wraper">
                <Accordion defaultActiveKey="0">
                 {faqItems}
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

export default Faqs;
