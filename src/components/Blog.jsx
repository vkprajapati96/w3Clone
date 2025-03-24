import React from "react";
import Card from "react-bootstrap/Card";


const Blog = () => {
  return (
    <section className="container-fluid ">
      <div className="container text-center mt-5 py-3 d-flex flex-column align-items-center gap-2  ">
        <h6> From Our Blog</h6>       
        <h2>Recent article</h2>
        <span>
        Our subject experts ensure that the content always helps the users to get valued information that might help them to use for their own. Let’s <br /> connect and build professional relationships over similar interests.
         
        </span>
        <div className="container mt-4">
        <div className="row  row-cols-lg-3 row-cols-md-2 gap-sm-3 gap-md-0 gap-lg-0">
          <div className="col-lg-4 ">
            <div className="text-start shadow "> 
              <Card className="">
                <Card.Img
                  variant="top"
                  src="https://ddy8ftb0naev0.cloudfront.net/assets/437/posts/Generative_AI_for_automotive_industry.jpg"
                />
                <Card.Body>
                  <div className="px-3 pt-3 pb-4">
                 <div className="mb-3">
                 <Card.Title className=""> The Transformative Power of Generative AI in the...</Card.Title>
                 </div>
                  <Card.Text className="">
                  Artificial Intelligence is slowly and steadily getting accepted by different industrial...
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-4">
         <div className="text-start rounded-4 shadow">
              <Card >
                <Card.Img
                  variant="top"
                  src="https://ddy8ftb0naev0.cloudfront.net/assets/436/posts/Transforming_Your_Business_With_AI_Software.jpg"
                />
                <Card.Body>
                <div className="px-3 pt-3 pb-4">
                <div className=" mb-3">
                 <Card.Title>A Comprehensive Guide to Transforming Your Busines</Card.Title>
                 </div>
                  <Card.Text>
                  Technologies like Artificial Intelligence and Machine Learning have been playing a vital
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-4">
         <div className="text-start rounded-4 shadow">
              <Card >
                <Card.Img
                  variant="top"
                  src="https://ddy8ftb0naev0.cloudfront.net/assets/437/posts/Generative_AI_for_automotive_industry.jpg"
                />
                <Card.Body>
                <div className="px-3 pt-3 pb-4">
                <div className="mb-3">
                 <Card.Title>How AI Is Revolutionizing the Oil and Gas Industry?</Card.Title>
                 </div>
                  <Card.Text>
                  Artificial Intelligence is slowly and steadily getting accepted by different industrial...
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div> 
            
            
        </div>    
      </div>
    </section>
  );
};

export default Blog;