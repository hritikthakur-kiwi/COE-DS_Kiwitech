import React from "react";
import { Inter } from "@next/font/google";
import {
  bannerSliderImg1,
  bannerSliderImg2,
  bannerSliderImg3,
  bannerSliderImg4,
  scrollIcon,
} from "@/assets/images/images";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

function HomeBanner(props) {
  const router = useRouter();
  function handleClick() {
    router.push("/#about-form");
  }
  const { t } = useTranslation();
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-two">
              <div className="banner-content-main">
                <h1 className="banner-heading">
                  {t("HOMEPAGE.Banner_HEADER_BIGGER_TEXT_1")}
                  <br />
                  {t("HOMEPAGE.Banner_HEADER_BIGGER_TEXT_2")}
                </h1>
                <h2 className="gradient-heading">
                  {t("HOMEPAGE.Banner_HEADER_SUB_HEAD_TEXT")}
                </h2>
                <p className="banner-para">
                  {t("HOMEPAGE.Banner_Header_Para_Text")}
                </p>
                <div className="talk-out-btn-area">
                  <button className="primary-button" onClick={handleClick}>
                    {t("HOMEPAGE.Talk_to_expert")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-one">
              <div className="banner-slider-main">
                <Carousel
                  fade
                  indicators={false}
                  controls={false}
                  interval={3000}
                >
                  <Carousel.Item>
                    <Image
                      className="slider-img"
                      src={bannerSliderImg1}
                      alt={"banner 1"}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="slider-img"
                      src={bannerSliderImg2}
                      alt={"banner 2"}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="slider-img"
                      src={bannerSliderImg3}
                      alt={"banner 3"}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="slider-img"
                      src={bannerSliderImg4}
                      alt={"banner 4"}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <Image className="scroll-icon" src={scrollIcon} alt="scroll" />
      </div>
    </div>
  );
}

export default HomeBanner;
