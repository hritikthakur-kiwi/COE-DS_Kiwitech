import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { robot } from "@/assets/images/images";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { useRouter } from 'next/router'

function AboutForm() {
  const { t } = useTranslation();
  const router = useRouter();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [showThankyouMessage, setShowThankyouMessage] = useState(false);
  const [formlookingFor, setFormlookingFor] = useState("software development");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    console.log("router",router.asPath);
    const checkoutFor = router.asPath.split("?type=");
    if (checkoutFor[1] && checkoutFor[1] === 'partnership') {
      setFormlookingFor('partnership');
      router.push(checkoutFor[0]);
    }
  }, [router])

  const handleTypeChange = (field, event) => {
    if (field === "name") {
      setName(event.target.value);
    }
    if (field === "email") {
      setEmail(event.target.value);
    }
    if (field === "phone") {
      setPhone(event.target.value);
    }
    if (field === "description") {
      setDescription(event.target.value);
    }
  };

  function validateForm() {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    if (!trimmedName) {
      setNameError("Name is required");
      return "error";
    }

    if (!trimmedEmail) {
      setNameError("");
      setEmailError("Email is required");
      return "error";
    } else if (!emailRegex.test(trimmedEmail)) {
      setEmailError("Email is invalid");
      return "error";
    }

    if (!trimmedPhone) {
      setEameError("");
      setPhoneError("Phone number is required");
      return "error";
    } else if (!phoneRegex.test(trimmedPhone)) {
      setPhoneError("Phone number must be numbers only");
      return "error";
    }
    setPhoneError("");
    return "success";
  }

  // function submitFormOnEnter(event) {
  //   if (event.keyCode === 13) {
  //     event.preventDefault();
  //     const form = document.getElementById("contractForm");
  //     form.submit();
  //   }
  // }

  const submitForm = async (e) => {
    setIsSubmiting(true);
    e.preventDefault();
    const check = validateForm();
    if (check === "error") {
      setIsSubmiting(false);
      return "Error submitting form.";
    }
    const data = JSON.stringify({
      lookingFor: formlookingFor,
      name: name,
      email: email,
      phone: phone,
      description: description,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/mail",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
    await axios(config);
    setShowThankyouMessage(true);
    setIsSubmiting(false);
    } catch (err) {
      setIsSubmiting(false);
      alert(err.message);
    }
  };

  return (
    <section className="about-form" id="about-form">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="text-center">
              <Image className="img-fluid" src={robot} alt="robot" />
            </div>
          </div>
          {showThankyouMessage ? (
            <>
              <div className="col-12 col-lg-7">
                <div className="form-container form-thank-you-main">
                  <h3 className="section-heading">
                    {t("ABOUT_FORM_COMPONENT.thankyou_head")}
                  </h3>
                  <h5 className="section-sub-heading">
                    {t("ABOUT_FORM_COMPONENT.thankyou_sub_head")}
                  </h5>
                </div>
              </div>
            </>
          ) : (
            <div className="col-12 col-lg-7">
              <div className="form-container">
                <h3 className="section-heading">
                  {t("ABOUT_FORM_COMPONENT.head")}
                </h3>
                <h5 className="section-sub-heading">
                  {t("ABOUT_FORM_COMPONENT.sub_head")}
                </h5>
                <Form onSubmit={(e) => submitForm(e)} id="contractForm">
                  <div className="about-form-tab-main">
                    <div className="form-title">I&#8242;m interested in</div>
                    <div className="about-form-tab1 nav-tabs">
                      <div className="">
                        <input
                          className="form-check-input d-none"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked={
                            formlookingFor === "software development"
                              ? true
                              : false
                          }
                        />
                        <label
                          className="nav-link"
                          htmlFor="flexRadioDefault1"
                          onClick={() =>
                            setFormlookingFor("software development")
                          }
                        >
                          Software Development
                        </label>
                      </div>
                      <div className="">
                        <input
                          className="form-check-input d-none"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked={
                            formlookingFor === "partnership" ? true : false
                          }
                        />
                        <label
                          className="nav-link me-0"
                          htmlFor="flexRadioDefault2"
                          onClick={() => setFormlookingFor("partnership")}
                        >
                          Partnership
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="about-form-inner">
                    <Form.Group className="form-group">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        onChange={(e) => handleTypeChange("name", e)}
                      />
                      {nameError && (
                        <span className="invalid-feedback d-block">
                          {nameError}
                        </span>
                      )}
                    </Form.Group>

                    <Form.Group className="form-group">
                      <Row>
                        <Col>
                          <Form.Control
                            type="text"
                            placeholder="Work Email"
                            onChange={(e) => handleTypeChange("email", e)}
                          />
                          {emailError && (
                            <span className="invalid-feedback d-block">
                              {emailError}
                            </span>
                          )}
                        </Col>
                        <Col>
                          <Form.Control
                            type="phone"
                            placeholder="Phone Number"
                            onChange={(e) => handleTypeChange("phone", e)}
                          />
                          {phoneError && (
                            <span className="invalid-feedback d-block">
                              {phoneError}
                            </span>
                          )}
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="How can we help you?"
                        onChange={(e) => handleTypeChange("description", e)}
                      />
                    </Form.Group>
                    <div className="text-end">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmiting}
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
              {/* end form container */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default AboutForm;
