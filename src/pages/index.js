import Header from "../components/Header";
import Footer from "../components/Footer";
import TechStacks from "../components/Common/techSolutions";
import ServicesWeProvide from "../components/Common/servicesWeProvide";
import QuickProjectStart from "../components/Common/quickProjectStart";
import AboutForm from "../components/Common/aboutForm";
import { Inter } from "@next/font/google";
import {
  userPic,
  clientPic1,
  quote,
  Richard,
  whatWeImg1,
  whatWeImg2,
  whatWeImg3,
  whatWeImg4,
  whatWeImg5,
} from "@/assets/images/images";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import HomeBanner from "@/components/Common/homeBanner";
const inter = Inter({ subsets: ["latin"] });

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

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      {/* Banner */}
      <HomeBanner />
      <ServicesWeProvide />
      {/* ----- excellence ------ */}
      {/* <div className="excellence-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="excellence-left-content">
                 
                <h2 className="gradient-heading">
                  {t("HOMEPAGE.Our_WEB3_PROWESS_HEAD.heading")}
                </h2>
                <div className="years-main">
                  <div className="years-inner">
                    <h2>{t("HOMEPAGE.Our_WEB3_PROWESS_HEAD.exp_number")}</h2>
                    <span>{t("HOMEPAGE.Our_WEB3_PROWESS_HEAD.exp_text")}</span>
                  </div>
                  <div className="years-inner">
                    <h2>
                      {t("HOMEPAGE.Our_WEB3_PROWESS_HEAD.del_proj_number")}
                    </h2>
                    <span>
                      {t("HOMEPAGE.Our_WEB3_PROWESS_HEAD.del_proj_text")}
                    </span>
                  </div>
                  <div className="years-inner">
                    <h2>
                      {t(
                        "HOMEPAGE.Our_WEB3_PROWESS_HEAD.end_user_supported_num"
                      )}
                    </h2>
                    <span>
                      {t(
                        "HOMEPAGE.Our_WEB3_PROWESS_HEAD.end_user_supported_text"
                      )}
                    </span>
                  </div>
                </div>
                <div className="excellance-para">
                  <p className="excellance-para-content">
                    {t("HOMEPAGE.Our_WEB3_PROWESS_HEAD.description")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="excellence-right-content">
                <div className="excellence-progress-content">
                  <div className="progress-box">
                    <div className="progress-box-inner">
                      <div className="progress-lable">
                        <span className="progress-percentage">60%</span>
                        <span className="progress-text">Usability</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ height: "166px" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-box-inner">
                      <div className="progress-lable">
                        <span className="progress-percentage">30%</span>
                        <span className="progress-text">Efficiency</span>
                      </div>
                      <div className="progress progress-Efficiency">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ height: "84px" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-box-inner">
                      <div className="progress-lable">
                        <span className="progress-percentage">10%</span>
                        <span className="progress-text">Marketing</span>
                      </div>
                      <div className="progress progress-Marketing">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ height: "27px" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ------ End of Excellence ------ */}

      {/* ----- What We Do ------ */}
      {/* <div className="what-we-do-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="what-we-left">
                <div className="what-we-img-area">
                  <div className="what-we-img-left">
                    <div className="what-we-images-bx">
                      <Image
                        src={whatWeImg1}
                        alt="Predictive modeling and forecasting"
                      />
                      <span className="what-we-img-txt">
                        Predictive modeling and forecasting
                      </span>
                    </div>
                    <div className="what-we-images-bx">
                      <Image
                        src={whatWeImg2}
                        alt="machine learning and deep learning analysis"
                      />
                      <span className="what-we-img-txt">
                        Machine Learning and Deep Learning Analysis
                      </span>
                    </div>
                  </div>
                  <div className="what-we-img-right">
                    <div className="what-we-images-bx">
                      <Image src={whatWeImg3} alt="Enterprise Solutions" />
                      <span className="what-we-img-txt">
                        Natural language processing and text analysis
                      </span>
                    </div>

                    <div className="what-we-images-bx">
                      <Image src={whatWeImg4} alt="DeFI Solutions " />
                      <span className="what-we-img-txt">
                        Data visualization
                      </span>
                    </div>

                    <div className="what-we-images-bx">
                      <Image src={whatWeImg5} alt="DAO Development " />
                      <span className="what-we-img-txt">Data Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="what-we-right">
                <h2 className="gradient-heading">
                  {t("HOMEPAGE.What_we_do.heading")}
                </h2>
                <h5>{t("HOMEPAGE.What_we_do.description_tag_line")}</h5>
                <p className="what-content-para">
                  {t("HOMEPAGE.What_we_do.description")}
                </p>
                <div className="what-inner-list">
                  <h5>{t("HOMEPAGE.What_we_do.listing_head")}</h5>
                  <ul>
                    <li>{t("HOMEPAGE.What_we_do.listing_item_1")}</li>
                    <li>{t("HOMEPAGE.What_we_do.listing_item_2")}</li>
                    <li>{t("HOMEPAGE.What_we_do.listing_item_3")}</li>
                    <li>{t("HOMEPAGE.What_we_do.listing_item_5")}</li>
                    <li>{t("HOMEPAGE.What_we_do.listing_item_4")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ----- End of What We Do ----- */}

      <TechStacks />

      {/* ---- Testimonials ---- */}
      <div className="testimonials-wrapper">
        <div className="testimonials-content">
          {/* <h2 className="gradient-heading">
            {t("HOMEPAGE.testimonial.heading")}
          </h2> */}
          <h2 className="section-heading extra-small-gradient">
            {t("HOMEPAGE.testimonial.heading")}
          </h2>
          <h5 className="section-sub-heading">
            {t("HOMEPAGE.testimonial.heading2")}
          </h5>
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
            <div className="testimonials-inner">
              <div className="testimonials-inner-content">
                <div className="testimonial-user">
                  <Image src={userPic} alt="user" />
                </div>
                <div className="testimonial-review">
                  <p className="testimonial-review-text">
                    {t("HOMEPAGE.testimonial.first_test_description")}
                  </p>
                  <div>
                    <h3 className="testimonial-user-name">
                      {" "}
                      {t("HOMEPAGE.testimonial.first_test_name")}
                    </h3>
                    <h4 className="testimonial-user-designation">
                      {t("HOMEPAGE.testimonial.first_test_desig")}
                    </h4>
                  </div>
                  <Image className="quote" src={quote} alt="quote" />
                </div>
              </div>
            </div>
            <div className="testimonials-inner">
              <div className="testimonials-inner-content">
                <div className="testimonial-user">
                  <Image src={clientPic1} alt="user" />
                </div>
                <div className="testimonial-review">
                  <p className="testimonial-review-text">
                    {t("HOMEPAGE.testimonial.third_test_description")}
                  </p>
                  <div>
                    <h3 className="testimonial-user-name">
                      {" "}
                      {t("HOMEPAGE.testimonial.third_test_name")}
                    </h3>
                    <h4 className="testimonial-user-designation">
                      {t("HOMEPAGE.testimonial.third_test_desig")}
                    </h4>
                  </div>
                  <Image className="quote" src={quote} alt="quote" />
                </div>
              </div>
            </div>
            <div className="testimonials-inner">
              <div className="testimonials-inner-content">
                <div className="testimonial-user">
                  <Image src={Richard} alt="user" />
                </div>
                <div className="testimonial-review">
                  <p className="testimonial-review-text">
                    {t("HOMEPAGE.testimonial.second_test_description")}
                  </p>
                  <div>
                    <h3 className="testimonial-user-name">
                      {t("HOMEPAGE.testimonial.second_test_name")}
                    </h3>
                    <h4 className="testimonial-user-designation">
                      {t("HOMEPAGE.testimonial.second_test_desig")}
                    </h4>
                  </div>
                  <Image className="quote" src={quote} alt="quote" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      {/* ---- End of Testimonials ---- */}
      <QuickProjectStart />
      <AboutForm />
      <Footer />
    </>
  );
}
