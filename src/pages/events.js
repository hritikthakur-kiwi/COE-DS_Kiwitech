import {useEffect, useState} from 'react';
import Footer from "@/components/Footer";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import { eventsImg1, eventsImg2 } from "@/assets/images/images";
import Link from "next/link";
import Image from "next/image";
import { getAllEvents } from '../apiHelper';

function Events(props) {
  const [allEvents, setAllEvents] = useState([]);
useEffect( () => {
  (async () => {
      try {
      const response = await getAllEvents();
      setAllEvents(response);
      } catch (err) {
      setAllEvents([]);
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
                <h3 className="gradient-heading">Events</h3>
                <p className="nft-banner-para">
                  Revolutionizing the Tech Industry: KiwiTech's Hosted and Upcoming Events
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="events-wrapper">
        <div className="container">
          <Row>
            {allEvents?.map(oneEvent => (
                 <Col key={oneEvent._id} md={4}>
                 <div className="events-content">
                   <Link href={oneEvent.youTubeVideoLink} target="_blank">
                     <div className="events-thumbnail">
                       <div className="event-name">{oneEvent.name}</div>
                       <Image src={oneEvent.image} alt="img" width={500} height={500} />
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

export default Events;
