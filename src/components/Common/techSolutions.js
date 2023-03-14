import React from "react";
import {
  etherscan,
  polygonLogo,
  algorand,
  palm,
  xrpLedger,
  rarible,
  vechainLogo,
  R3Corda,
  HyperledgerIndyLogo,
  HyperLedgerIIndy,
  ipfs,
  fileCoin,
  infura,
  metamask,
  walletConnect,
  trustWallet,
  wyre,
  moonPay,
  stellarLogo,
  CoinbaseLogo,
  UniswapLogoandWordmark,
  pancakeSwap,
  OpenSea,
  synapse,
  AnySwap,
  Hop,
  HyperledgerFabric,
  frameworks,
  sawtooth,
  explorer,
  loadify,
  teacherly,
  hyperledger,
  hyperledgerComposer,
  iroha,
  admitad,
  Kuprik,
  lendsmart,
  megaun,
  guardrailsBlack,
  topica,
  terbine,
  internews,
  nambataxi,
  veeqo,
  mythril,
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
            <Image src={frameworks} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={sawtooth} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={explorer} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={loadify} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={teacherly} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={hyperledger} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={hyperledgerComposer} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={iroha} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={admitad} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={Kuprik} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={lendsmart} alt="Company Logo" />
          </div>

          <div className="logo-container">
            <Image src={megaun} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={guardrailsBlack} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={topica} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={terbine} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={internews} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={nambataxi} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={veeqo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={mythril} alt="Company Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default TechStacks;
