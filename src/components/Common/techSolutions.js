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
        <div className="logo-section">
          <div className="logo-container">
            <Image src={pandasLogo} alt="SciPy" />
          </div>
          <div className="logo-container">
            <Image src={numPy} alt="FFmpegLogo" />
          </div>
          <div className="logo-container">
            <Image src={seabornLogo} alt="Pytorch" />
          </div>
          <div className="logo-container">
            <Image src={matplotlib} alt="Yolo" />
          </div>
          <div className="logo-container">
            <Image src={PlotlyLogo} alt="aws" />
          </div>
          <div className="logo-container">
            <Image src={scikitLogo} alt="AutoGluon" />
          </div>
          <div className="logo-container">
            <Image src={SciPy} alt="fastApi" />
          </div>
          <div className="logo-container">
            <Image src={autogluon} alt="NumPy" />
          </div>
          <div className="logo-container">
            <Image src={tensorFlow} alt="RASA" />
          </div>
          <div className="logo-container">
            <Image src={kerasLogo} alt="Google Cloud" />
          </div>
          <div className="logo-container">
            <Image src={pytorch} alt="Hugging Face" />
          </div>

          <div className="logo-container">
            <Image src={OpenCvLogo} alt="tensorFlow" />
          </div>
          <div className="logo-container">
            <Image src={ffmpegLogo} alt="Plotly" />
          </div>
          <div className="logo-container">
            <Image src={pillowLogo} alt="SpaCy" />
          </div>
          <div className="logo-container">
            <Image src={yolo} alt="Docker" />
          </div>
          <div className="logo-container">
            <Image src={huggingfaceLogo} alt="TextBlob" />
          </div>
          {/* <div className="logo-container">
            <Image src={transformerLogo} alt="Transformer" />
          </div> */}
          <div className="logo-container">
            <Image src={SpaCyLogo} alt="seaborn" />
          </div>
          {/* <div className="logo-container">
            <Image src={nltk} alt="NLTK" />
          </div> */}
          <div className="logo-container">
            <Image src={pyLogo} alt="pandas" />
          </div>
          <div className="logo-container">
            <Image src={flaskLogo} alt="django" />
          </div>
          <div className="logo-container">
            <Image src={django} alt="streamlit" />
          </div>
          <div className="logo-container">
            <Image src={fastApi} alt="OpenCV" />
          </div>
          <div className="logo-container">
            <Image src={streamlitLogo} alt="matplotLipb" />
          </div>
          {/* <div className="logo-container">
            <Image src={postmanLogo} alt="Postman" />
          </div> */}
          <div className="logo-container">
            <Image src={rasaLogo} alt="CoreNLP" />
          </div>
          <div className="logo-container">
            <Image src={awsLogo} alt="scikit learn" />
          </div>
          {/* <div className="logo-container">
            <Image src={azure} alt="azure" />
          </div> */}
          <div className="logo-container">
            <Image src={googleCloud} alt="MedSpaCy" />
          </div>
          <div className="logo-container">
            <Image src={dockerLogo} alt="scikitImage" />
          </div>
          {/* <div className="logo-container">
            <Image src={postman} alt="postMan" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default TechStacks;
