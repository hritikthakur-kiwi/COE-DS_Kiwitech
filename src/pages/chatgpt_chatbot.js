import {
  automateHrP,
  datacollection,
  iconGame,
  iconLinkdin,
  iconTelegram,
  iconTwitter,
  improveCustumer,
  increasedEfficiency,
  personalization,
  providingCust,
  scalability,
  imageVideoSliderImg1,
  imageFacilitateIcon1,
  imageFacilitateIcon2,
  visualizationFacilitateIcon4,
  TrainingandEducation,
  maintenanceAndSupport,
  AIIcon,
  CompetitiveAdvantage,
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
      <section className="nft-development-banner chatGpt-banner">
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
                  <Image src={imageVideoSliderImg1} alt="user" />
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
            <div className="nft-inner">
              <div className="nft-inner-content">
                <div className="nft-user">
                  <Image src={CompetitiveAdvantage} alt="user" />
                </div>
                <div className="nft-review">
                  <h4 className="nft-review-head">Competitive Advantage</h4>
                  <p className="nft-text-para">
                    By automating routine tasks and providing personalized,
                    real-time support, businesses can differentiate themselves
                    from competitors and improve customer satisfaction and
                    loyalty. Additionally, their ability to learn and adapt to
                    customer needs and provide data-driven insights can help
                    businesses make informed decisions and stay ahead of the
                    competition
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* ---- we facilate ----- */}
      <section className="standard-main">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="network-top-head">
                <h3 className="section-heading extra-small-gradient">
                  {t("DAO_DEVELOPMENT.nft_standards_sec_head")}
                </h3>
                <h5 className="banner-para">
                  Our effective services for ChatGPT & ChatBOT
                </h5>
              </div>
              <div className="standard-content-main">
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image
                      src={imageFacilitateIcon1}
                      alt="Customized Solutions"
                    />
                  </div>
                  <div>
                    <h4 class="standard-item-head">Customized Solutions</h4>
                    <p className="standard-para">
                      We can create customized ChatGPT and Chatbot solutions
                      that are tailored to the specific needs of a customer.
                      This can include personalized conversational interfaces,
                      integration with existing systems, and training for
                      employees
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={imageFacilitateIcon2} alt="Data Analytics" />
                  </div>
                  <div>
                    <h4 class="standard-item-head">Data Analytics</h4>
                    <p className="standard-para">
                      We can provide data analytics services to customers,
                      leveraging the insights gained from ChatGPT and Chatbot
                      interactions to improve customer experiences and drive
                      business decisions
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image
                      src={visualizationFacilitateIcon4}
                      alt="Integration Services"
                    />
                  </div>
                  <div>
                    <h4 class="standard-item-head">Integration Services</h4>
                    <p className="standard-para">
                      We can provide integration services for ChatGPT and
                      Chatbots, helping customers seamlessly integrate the
                      technology into their existing systems and workflows
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image
                      src={maintenanceAndSupport}
                      alt="Maintenance and Support"
                    />
                  </div>
                  <div>
                    <h4 class="standard-item-head">Maintenance and Support</h4>
                    <p className="standard-para">
                      We can provide maintenance and support services for
                      ChatGPT and Chatbots, ensuring that the technology remains
                      up-to-date and functioning smoothly
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image
                      src={TrainingandEducation}
                      alt="Training and Education"
                    />
                  </div>
                  <div>
                    <h4 class="standard-item-head">Training and Education</h4>
                    <p className="standard-para">
                      We can provide training and education services to
                      customers, helping them understand the capabilities of
                      ChatGPT and Chatbots and how to best leverage the
                      technology for their specific needs
                    </p>
                  </div>
                </div>
                <div className="standard-item facility-item">
                  <div className="facility-icon">
                    <Image src={AIIcon} alt="AI" />
                  </div>
                  <div>
                    <p className="standard-para">
                      By providing these facilities, an organization can
                      showcase the potential of ChatGPT and Chatbots to clients
                      and demonstrate their value as a strategic partner for
                      digital transformation
                    </p>
                  </div>
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
            <Col md={12} className="mt-4">
              <div className="sol-top-head">
                <h3> Real World Problem: Solution example</h3>
              </div>
            </Col>
            <Col md={6} className="mt-4">
              <div className="sol-top-head">
                <h3 className="gradient-heading mb-4">
                  Providing Customer Support
                </h3>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head"> The Problem </h3>
                <p className="sol-top-para">
                  The manual process of scheduling appointments was becoming a
                  costly and time-consuming task.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head">The Solution </h3>
                <p className="sol-top-para">
                  In order to streamline the process of scheduling appointments
                  for various types, we developed a rule-based chatbot that
                  operates on a fixed flow. This chatbot eliminates the need for
                  manual intervention, thereby saving valuable time and reducing
                  the cost associated with human resources. The chatbot prompts
                  users with predefined options and collects relevant
                  information, such as the user's name, email, or phone number,
                  to contact the user further. This approach enables a more
                  efficient and seamless scheduling process for both the users
                  and the business.
                </p>
              </div>
            </Col>
            <Col md={6} className="mt-4">
              <div className="solution-img">
                <Image
                  src={providingCust}
                  alt="Providing Customer Support"
                  className="img-fluid"
                />
              </div>
            </Col>

            <Col md={6} className="pt-3 order-two f-des">
              <div className="solution-img">
                <Image
                  src={automateHrP}
                  alt="Automating HR Processes"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6} className="mt-5 pt-3 order-one f-des">
              <div className="sol-top-head">
                <h3 className="gradient-heading mb-4">
                  Automating HR Processes
                </h3>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head">The Problem </h3>
                <p className="sol-top-para">
                  Fine-tuning ChatGPT involves adapting a pre-trained language
                  model to a specific task or domain through additional training
                  on a relevant dataset.
                </p>
              </div>
              <div className="sol-para-main">
                <h3 className="sol-top-para-head">The Solution </h3>

                <p className="sol-top-para">
                  The process of fine-tuning ChatGPT requires selecting a
                  relevant dataset and defining the specific task to be
                  performed. The pre-trained model can then be used as a
                  starting point, with additional training on the dataset using
                  techniques such as transfer learning and gradient descent.
                  Evaluation of the model's performance is essential, with any
                  necessary adjustments made for optimal results.
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
