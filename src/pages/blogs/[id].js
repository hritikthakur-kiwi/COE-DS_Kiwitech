import { useEffect ,useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { getBlogByID } from '../../apiHelper';
import { useRouter } from 'next/router';

function BlogDetails() {
  const router = useRouter();
  const [oneBlog, setOneBlog] = useState({});
  useEffect( () => {
    (async () => {
      try {
      const id = router.asPath.split("/blogs/")[1];
      const blog = await getBlogByID(id);
      setOneBlog(blog);
      } catch (err) {
        router.back();
      }
    })()
  }, [router])

  return (
    <>
      <Header />
      {/* ----- Start Blogs content ----- */}
      <section className="blog-wrapper blog-details-wrapper">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="blog-main">
                <div className="blog-details-content">
                  <div className="blog-details-inner">
                    <h1 className="blog-title">
                      {oneBlog?.title}
                    </h1>
                    <div className="blog-para">
                      <h4>
                        {oneBlog?.createAt}
                      </h4>
                    </div>
                    <div className="blog-details-img">
                      <Image src={oneBlog?.image} width={800} height={300} alt="" />
                    </div>
                    <div className="b-details-inner">
                    <div
                      dangerouslySetInnerHTML={{ __html: oneBlog?.content }}          
                    />
                    </div>
                  </div>
                </div>
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

export default BlogDetails;
