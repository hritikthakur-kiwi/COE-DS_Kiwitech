import React, {useEffect, useState} from 'react';
import Footer from "@/components/Footer";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from '../apiHelper';

function Blog(props) {
const [allBlogPosts, setAllBlogPosts] = useState([]);
useEffect( () => {
  (async () => {
      try {
      const response = await getAllBlogPosts();
      setAllBlogPosts(response.blogs);
      } catch (err) {
      setAllBlogPosts([]);
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
                <h3 className="gradient-heading">Stay curious.</h3>
                <p className="nft-banner-para">
                  Discover stories, thinking, and expertise from writers on any
                  topic.
                </p>
                <div className="talk-out-btn-area">
                  <button className="primary-button">Start reading</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ----- Start Blogs content ----- */}
      <section className="blog-wrapper">
        <div className="container">
          <Row>
            <Col md={8}>
              <div className="blog-main">
                {allBlogPosts?.map( blogPost => (
                      <div key={blogPost._id} className="blog-content">
                      <div className="blog-content-inner">
                        <Link href={`/blogs/${blogPost._id}`}>
                          <h2 className="blog-title">
                            {blogPost.title}
                          </h2>
                          <div className="blog-para">
                            <h4 
                            dangerouslySetInnerHTML={{ __html: blogPost.content.slice(0,100)+"... read more" }}  
                            />
                            {/* </h4> */}
                          </div>
                        </Link>
                        <div className="post-time">
                          <span>Feb 8 </span>
                          <span>&nbsp; - &nbsp; </span>
                          <span> 5 min read </span>
                        </div>
                      </div>
                      <Link href="/blog-details" className="blog-right-img">
                        <Image src={blogPost.image} alt="" width={100} height={100} />
                      </Link>
                    </div>
                ))}
              </div>
            </Col>
            <Col md={4}>
              <div className="category-main">
                <h2 className="category-head">Related Topics</h2>
                {/* <div className="category-tags">
                  <div className="category-tag-item">
                    <Link href="#">Deep Learning</Link>
                  </div>
                  <div className="category-tag-item">
                    <Link href="#">Data</Link>
                  </div>
                  <div className="category-tag-item">
                    <Link href="#">Deep Learning</Link>
                  </div>
                  <div className="category-tag-item">
                    <Link href="#">Technology</Link>
                  </div>
                  <div className="category-tag-item">
                    <Link href="#">Programming</Link>
                  </div>
                  <div className="category-tag-item">
                    <Link href="#">Python</Link>
                  </div>
                  <div className="category-tag-item">
                    <Link href="#">Machine Learning</Link>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ----- // End of Blogs content ----- */}
      <Footer />
    </>
  );
}

export default Blog;
