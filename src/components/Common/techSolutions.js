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
            <Image src={etherscan} alt="Company Logo" />
        </div>
        <div className="logo-container">
          <Image src={polygonLogo} alt="Company Logo" />
        </div>
        <div className="logo-container">
          <Image src={palm} alt="Company Logo" />
        </div>
        <div className="logo-container">
            <Image src={stellarLogo} alt="Company Logo" />
        </div>
        <div className="logo-container">
            <Image src={algorand} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={xrpLedger} alt="Company Logo" />
        </div>
        <div className="logo-container">
            <Image src={vechainLogo} alt="Company Logo" />
        </div>
        <div className="logo-container">
            <Image src={R3Corda} alt="Company Logo" />
        </div>
        <div className="logo-container">
            <Image src={HyperledgerFabric} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={HyperledgerIndyLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={HyperLedgerIIndy} alt="Company Logo" />
        </div>

          <div className="logo-container">
            <Image src={trustWallet} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={CoinbaseLogo} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={walletConnect} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={metamask} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={moonPay} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={wyre} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={AnySwap} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={UniswapLogoandWordmark} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={pancakeSwap} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={OpenSea} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={rarible} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={fileCoin} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={ipfs} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={infura} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={synapse} alt="Company Logo" />
          </div>
          <div className="logo-container">
            <Image src={Hop} alt="Company Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default TechStacks;
