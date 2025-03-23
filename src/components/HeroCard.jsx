import React from 'react'
import Button from "react-bootstrap/Button";

function HeroCard({ heading1,  sub_head1  }) {
  return (

    <div className="heroCard row d-flex align-items-center mt-sm-1  ">
      <div className="heroCard-left col-sm-12 col-lg-6 w-sm-50 ">
        <div>
        <h1 className='fs-1 fw-bold mt-sm-4'>{heading1}</h1>
        </div>
        <div>
          <p className='fs-6 text-secondary'>{sub_head1}</p>
        </div>
        <div>
          <Button variant="primary fw-semibold">See Our Work</Button>
        </div>
      </div>
      <div className="hero-card-img  col-sm-12 col-lg-6 d-flex justify-content-lg-end">
        <img src="/image.jpg" alt="Hero" className="hero_image  w-75"  />
      </div>
    </div>

      
  )
}

export default HeroCard
