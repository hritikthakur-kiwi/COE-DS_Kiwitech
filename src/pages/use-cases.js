import React, {useEffect, useState} from 'react';
import Footer from "@/components/Footer";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { getAllUseCases } from '../apiHelper';

function UseCases(props) {
const [allUseCases, setAllUseCases] = useState([]);
useEffect( () => {
  (async () => {
      try {
      const response = await getAllUseCases();
      setAllUseCases(response.caseStudies);
      } catch (err) {
        setAllUseCases([]);
      }
  })()
}, []);

  return (
    <>
      <Header />
      <section className="nft-development-banner">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="text-center">
                <h3 className="gradient-heading">Case Studies</h3>
                <p className="nft-banner-para">
                  Discover How Our Solutions Helped Clients Achieve Their Goals
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="case-studies-wrapper">
        <div className="container">
          <Row>
            {allUseCases?.map(one => (
                 <Col md={6} sm={12}>
                 <div className="case-studies-item">
                   <Link href={one.pdf} target="_blank">
                     <Image src={one.image} height={500} width={500} alt="" />
                     <div className="case-text-box">
                       <p className="case-text">
                         {one.description}
                       </p>
                       <h2 className="case-read-more">Read More</h2>
                     </div>
                   </Link>
                 </div>
               </Col>
            ))}
          </Row>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default UseCases;
