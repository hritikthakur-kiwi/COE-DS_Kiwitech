import { Row, Col } from "react-bootstrap";
import { globe, tech1, tech2, tech3, tech4 } from "@/assets/images/images";
import Image from "next/image";
import QuickProjectStart from "../components/Common/quickProjectStart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export default function About(props) {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <section className="about-banner">
        <div className="container">
          <Row>
            <Col md={6}>
              <h3 className="section-heading small-gradient">
                {t("ABOUT_PAGE.page_head")}
              </h3>
              <h5 className="section-sub-heading text-white">
                {t("ABOUT_PAGE.page_sub_head")}
              </h5>
              <p>{t("ABOUT_PAGE.page_head_paragraph")}</p>
            </Col>
            <Col md={6}>
              <div className="image-container text-center">
                <Image src={globe} alt="Globe" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="new-tech">
        <div className="container">
          <Row>
            <Col lg={6}>
              <Row className="image-inner">
                <Col sm={6}>
                  <Image
                    src={tech1}
                    alt="Tech 1"
                    className="tech-1 img-fluid"
                  />
                  <Image
                    src={tech2}
                    alt="Tech 2"
                    className="tech-2 img-fluid"
                  />
                </Col>
                <Col sm={6}>
                  <Image
                    src={tech3}
                    alt="Tech 3"
                    className="tech-3 img-fluid"
                  />
                  <Image
                    src={tech4}
                    alt="Tech 4"
                    className="tech-4 img-fluid"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <h2 className="section-title">{t("ABOUT_PAGE.second_head_1")}</h2>
              <h3 className="section-heading small-gradient">
                {t("ABOUT_PAGE.second_head_2")}
              </h3>
              <p>{t("ABOUT_PAGE.second_section_text")}</p>
              {/* <p className='para-head'>Highlighted</p> */}
            </Col>
          </Row>
        </div>
      </section>
      <section className="roadmap-section">
        <div className="container">
          <h2 className="section-title text-center">
            {t("ABOUT_PAGE.our_journey_sec_head")}
          </h2>
          <h3 className="section-heading text-center">
            {t("ABOUT_PAGE.roadmap_text")}
          </h3>
          <div className="timeline">
            <div className="timeline-container left">
              <div className="content">
                <h3>{t("ABOUT_PAGE.journey_head_1")}</h3>
                <p>{t("ABOUT_PAGE.journey_text_1")}</p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="content">
                <h3>{t("ABOUT_PAGE.journey_head_2")}</h3>
                <p>{t("ABOUT_PAGE.journey_text_2")}</p>
              </div>
            </div>
            <div className="timeline-container left">
              <div className="content">
                <h3>{t("ABOUT_PAGE.journey_head_3")}</h3>
                <p>{t("ABOUT_PAGE.journey_text_3")}</p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="content">
                <h3>{t("ABOUT_PAGE.journey_head_4")}</h3>
                <p>{t("ABOUT_PAGE.journey_text_4")}</p>
              </div>
            </div>
            <div className="timeline-container left">
              <div className="content">
                <h3>{t("ABOUT_PAGE.journey_head_5")}</h3>
                <p>{t("ABOUT_PAGE.journey_text_5")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuickProjectStart />
      <Footer />
    </div>
  );
}
