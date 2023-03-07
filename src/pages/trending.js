import React, {useEffect, useState} from 'react';
import Footer from "@/components/Footer";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import { rightArrow } from "@/assets/images/images";
import Link from "next/link";
import Image from "next/image";
import { getAllTrending } from '../apiHelper';


function Trending(props) {
const [allTrending, setAllTrending] = useState([]);
useEffect( () => {
(async () => {
    try {
    const response = await getAllTrending();
    setAllTrending(response);
    } catch (err) {
      setAllTrending([]);
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
                <h3 className="gradient-heading">Trending</h3>
                <p className="nft-banner-para">
                  Stay Up-to-Date with Our Trending Articles
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="trending-wrapper">
        <div className="container">
          <Row>
            <Col md={12}>
              {allTrending?.map( one => (
                      <div className="trending-content">
                      <Link href={one.url} target="_blank">
                        <div className="trending-top">
                          <h1 className="trending-heading">{one.name}</h1>
                          <Image
                            className="trending-more"
                            src={rightArrow}
                            alt="arrow"
                          />
                        </div>
                        <p className="trending-text">
                         {one.description}
                        </p>
                      </Link>
                    </div>
              ))}
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Trending;
