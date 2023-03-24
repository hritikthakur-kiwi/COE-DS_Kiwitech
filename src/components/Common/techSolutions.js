import React from "react";
import {
  SciPy,
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
  MedSpaCy,
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
            <Image src={SciPy} alt="SciPy" />
          </div>
          <div className="logo-container">
            <Image src={ffmpegLogo} alt="FFmpegLogo" />
          </div>
          <div className="logo-container">
            <Image src={pytorch} alt="Pytorch" />
          </div>
          <div className="logo-container">
            <Image src={yolo} alt="Yolo" />
          </div>
          <div className="logo-container">
            <Image src={awsLogo} alt="aws" />
          </div>
          <div className="logo-container">
            <Image src={autogluon} alt="AutoGluon" />
          </div>
          <div className="logo-container">
            <Image src={fastApi} alt="fastApi" />
          </div>
          <div className="logo-container">
            <Image src={numPy} alt="NumPy" />
          </div>
          <div className="logo-container">
            <Image src={rasaLogo} alt="RASA" />
          </div>
          <div className="logo-container">
            <Image src={googleCloud} alt="Google Cloud" />
          </div>
          <div className="logo-container">
            <Image src={huggingfaceLogo} alt="Hugging Face" />
          </div>

          <div className="logo-container">
            <Image src={tensorFlow} alt="tensorFlow" />
          </div>
          <div className="logo-container">
            <Image src={PlotlyLogo} alt="Plotly" />
          </div>
          <div className="logo-container">
            <Image src={SpaCyLogo} alt="SpaCy" />
          </div>
          <div className="logo-container">
            <Image src={dockerLogo} alt="Docker" />
          </div>
          <div className="logo-container">
            <Image src={textBlob} alt="TextBlob" />
          </div>
          <div className="logo-container">
            <Image src={seabornLogo} alt="seaborn" />
          </div>
          <div className="logo-container">
            <Image src={pandasLogo} alt="pandas" />
          </div>
          <div className="logo-container">
            <Image src={django} alt="django" />
          </div>
          <div className="logo-container">
            <Image src={streamlitLogo} alt="streamlit" />
          </div>
          <div className="logo-container">
            <Image src={OpenCvLogo} alt="OpenCV" />
          </div>
          <div className="logo-container">
            <Image src={matplotlib} alt="matplotLipb" />
          </div>
          <div className="logo-container">
            <Image src={coreNlp} alt="CoreNLP" />
          </div>
          <div className="logo-container">
            <Image src={scikitLogo} alt="scikit learn" />
          </div>
          <div className="logo-container">
            <Image src={MedSpaCy} alt="MedSpaCy" />
          </div>
          <div className="logo-container">
            <Image src={scikitImg} alt="scikitImage" />
          </div>
          <div className="logo-container">
            <Image src={gensimLogo} alt="GENSIM" />
          </div>
          <div className="logo-container">
            <Image src={amazonComprehend} alt="Amazon Comprehend" />
          </div>
          <div className="logo-container">
            <Image src={flaskLogo} alt="Flask" />
          </div>
          <div className="logo-container">
            <Image src={pyLogo} alt="Python Pytessaract" />
          </div>
          <div className="logo-container">
            <Image src={pillowLogo} alt="pillow" />
          </div>
          <div className="logo-container">
            <Image src={kerasLogo} alt="keras" />
          </div>
          <div className="logo-container">
            <Image src={fastText} alt="fastText" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default TechStacks;
