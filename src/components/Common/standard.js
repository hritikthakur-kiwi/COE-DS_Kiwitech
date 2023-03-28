import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  customerService,
  healthcare,
  searchGlass,
  emailMarketing,
  risk,
  supplyChain,
  timeManagement,
  accurateSales,
  investment,
  analysis,
} from "@/assets/images/images";

function Standard(props) {
  const { t } = useTranslation();
  return (
    <section className="standard-main">
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="network-top-head">
              <h3 className="section-heading extra-small-gradient">
                {t("NFT_DEVELOPMENT.nft_standards_sec_head")}
              </h3>
              <h5 className="banner-para">
                {t("NFT_DEVELOPMENT.nft_standards_sec_sub_head")}
              </h5>
            </div>
            <div className="standard-content-main">
              <div className="standard-item facility-item ">
                <div className="facility-icon">
                  <Image src={customerService} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_1")}
                  </p>
                </div>
              </div>
              <div className="standard-item facility-item">
                <div className="facility-icon">
                  <Image src={healthcare} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_2")}
                  </p>
                </div>
              </div>
              <div className="standard-item facility-item">
                <div className="facility-icon">
                  <Image src={searchGlass} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_3")}
                  </p>
                </div>
              </div>
              <div className="standard-item facility-item">
                <div className="facility-icon">
                  <Image src={emailMarketing} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_4")}
                  </p>
                </div>
              </div>
              <div className="standard-item facility-item">
                <div className="facility-icon">
                  <Image src={risk} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_5")}
                  </p>
                </div>
              </div>
              <div className="standard-item facility-item">
                <div className="facility-icon">
                  <Image src={supplyChain} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_6")}
                  </p>
                </div>
              </div>
              <div className="standard-item facility-item">
                <div className="facility-icon">
                  <Image src={timeManagement} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_7")}
                  </p>
                </div>
              </div>
              <div className="standard-item facility-item">
                <div className="facility-icon">
                  <Image src={accurateSales} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_8")}
                  </p>
                </div>
              </div>
              <div className="standard-item facility-item">
                <div className="facility-icon">
                  <Image src={investment} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_9")}
                  </p>
                </div>
              </div>
              <div className="standard-item facility-item">
                <div className="facility-icon">
                  <Image src={analysis} alt="" />
                </div>
                <div>
                  <p className="standard-para">
                    {t("NFT_DEVELOPMENT.nft_standard_text_10")}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Standard;
