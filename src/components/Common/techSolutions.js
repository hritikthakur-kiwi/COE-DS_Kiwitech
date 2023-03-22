import React from "react";
import {
  sLogo,
  ffmpegLogo,
  pytorch,
  yolo,
  awsLogo,
  autogluon,
  fastApi,
  numPy,
  rasaLogo,
  googleCloud,
  huggingfaceLogo,
  tensorFlow,
  PlotlyLogo,
  SpaCyLogo,
  dockerLogo,
  textBlob,
  seabornLogo,
  pandasLogo,
  django,
  streamlitLogo,
  OpenCvLogo,
  matplotlib,
  coreNlp,
  scikitLogo,
  squareLogo,
  brandLogo1,
  scikitImg,
  gensimLogo,
  amazonComprehend,
  flaskLogo,
  pyLogo,
  pillowLogo,
  kerasLogo,
  fastText,
  Javascript,
} from "@/assets/images/images";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function TechStacks() {
  const { t } = useTranslation();
  return (
    <section className="tech-section">
      <div className="container">
        <h3 className="section-heading extra-small-gradient">
          {t("Tech_Stack_component_TITLE")}
        </h3>
        <h5 className="section-sub-heading">
          {/* {t("Tech_Stack_component_SUB_TITLE")} */}
        </h5>
        <div className="logo-section">
          <div className="logo-container">
            <Image src={sLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={ffmpegLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={pytorch} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={yolo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={awsLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={autogluon} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={fastApi} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={numPy} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={rasaLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={googleCloud} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={huggingfaceLogo} alt="Company Logo" />
          </div>

          <div className="logo-container">
            <Image src={tensorFlow} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={PlotlyLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={SpaCyLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={dockerLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={textBlob} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={seabornLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={pandasLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={django} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={streamlitLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={OpenCvLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={matplotlib} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={coreNlp} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={scikitLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={squareLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={brandLogo1} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={scikitImg} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={gensimLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={amazonComprehend} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={flaskLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={pyLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={pillowLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={kerasLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={fastText} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={Javascript} alt="Company Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default TechStacks;
