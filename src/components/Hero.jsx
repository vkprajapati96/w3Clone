import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Hero.css"
import HeroCard from "./HeroCard";


function Hero() {
  return (
    <div className=""> 
    <div className="hero container">
    <Carousel interval={1000}>
      <Carousel.Item  >
      <div>
         <HeroCard
                  heading1="Our digital solution  helps companies to scale their busines" 
                  sub_head1="We have built enormous solutions for startups and enterprise across the world."
            />
            </div>
      </Carousel.Item>

      <Carousel.Item  >
      <div>
         <HeroCard
                  heading1="Our digital solution helps companies to scale their busines" 
                  sub_head1="We have built enormous solutions for startups and enterprise across the world."
            />
            </div>
      </Carousel.Item>

      
      <Carousel.Item  >
      <div>
         <HeroCard
                  heading1="Our digital solution helps companies to scale their busines" 
                  sub_head1="We have built enormous solutions for startups and enterprise across the world."
            />
            </div>
      </Carousel.Item>

    </Carousel>
  
    <div className=" hero-footer d-flex align-items-center flex-wrap gap-5  mt-3 mb-4">
          <img src="https://www.w3villa.com/production/assets/landing_page/adobe-4-5a6302ef3237aafcb0f7832df87b62a29284f52af943a4aea920903c4cce6c9d.png" alt="" />
          <img src="https://www.w3villa.com/production/assets/landing_page/aws-4-52d80c8eec25f6cb354e51438fff2b69cd59d1a0368f5461553a990759bf4e0d.png" alt="" />           
          <img src="https://www.w3villa.com/production/assets/landing_page/new-relic-4-1ec5ce3f4cf08b4db0ff61df3d6a8bb0d84709a6e333ddaaad454dee91945ccb.png" alt="" />
          <img src="https://www.w3villa.com/production/assets/landing_page/gorgias-4-2b8fac76ade5e9f07b89dfdecbccb8526f911ef4182b54a742fad3c71d7f7ad1.png" alt="" />
        </div>
    </div>
    </div>
  );
}

export default Hero;
