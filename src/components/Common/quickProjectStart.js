import React, { Component } from "react";
import { flag, team, report, graph, phone } from "@/assets/images/images";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function QuickProjectStart() {
  const { t } = useTranslation();
    return (
      <section className="project-overview">
        <div className="container">
          <h3 className="section-heading small-gradient">
          {t("QUICK_PROJECT_START.head")}
          </h3>
          <h5 className="section-sub-heading more-bottom-space">
            {t("QUICK_PROJECT_START.sub_head")}
          </h5>
          <div className="project-section">
            <div className="project-card">
              <div className="card-image">
                <Image src={phone} alt="Phone" />
              </div>
              <h4 className="card-title">{t("QUICK_PROJECT_START.step_head_1")}</h4>
              <p>{t("QUICK_PROJECT_START.step_desc_1")}</p>
            </div>
            <div className="project-card">
              <div className="card-image">
                <Image src={graph} alt="Graph" />
              </div>
              <h4 className="card-title">{t("QUICK_PROJECT_START.step_head_2")}</h4>
              <p>{t("QUICK_PROJECT_START.step_desc_2")}</p>
            </div>
            <div className="project-card">
              <div className="card-image">
                <Image src={report} alt="Report" />
              </div>
              <h4 className="card-title">{t("QUICK_PROJECT_START.step_head_3")}</h4>
              <p>
              {t("QUICK_PROJECT_START.step_desc_3")}
              </p>
            </div>
            <div className="project-card">
              <div className="card-image">
                <Image src={team} alt="Team" />
              </div>
              <h4 className="card-title">{t("QUICK_PROJECT_START.step_head_4")}</h4>
              <p>{t("QUICK_PROJECT_START.step_desc_4")}</p>
            </div>
            <div className="project-card">
              <div className="card-image">
                <Image src={flag} alt="Flag" />
              </div>
              <h4 className="card-title">{t("QUICK_PROJECT_START.step_head_5")}</h4>
              <p>
              {t("QUICK_PROJECT_START.step_desc_5")}
              </p>
            </div>
          </div>
          <Link className="btn btn-outline-primary w-100" href={"/#about-form"}>
            {t("QUICK_PROJECT_START.button_text")}
          </Link>
        </div>
      </section>
    );
}
export default QuickProjectStart;
