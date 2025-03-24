import React from 'react'
import "./Services.css"
import Card from 'react-bootstrap/Card';
import { LuGitCompareArrows } from "react-icons/lu";
import { BsCurrencyBitcoin } from "react-icons/bs";




function Services() {
  return (
    <section className="container-fluid">
      <div className="container text-center mt-5 d-flex flex-column align-items-center gap-3 ">
        <h4>Our Services</h4>
        <h2>The services we are offering</h2>
        <span>
          Our service includes a spectrum of software development solutions from
          development to a smart decision for your business.
        </span>
    
    <div className='d-flex flex-column align-items-center gap-3 mt-3'>
    <div className="row g-4">
  <div className="col-lg-6 ">
    <Card className="h-100  border-0 py-2  " style={{ minHeight: "300px",backgroundColor:"#ffe6f0df" }}> {/* Reduced height */}
      <Card.Body>
        <Card.Title className='fs-1'><LuGitCompareArrows /></Card.Title>
        <Card.Subtitle className="fs-4 mb-2 text-muted">Web-App Development</Card.Subtitle>
        <Card.Text className='fs-5'>
          W3villa Technologies offer bespoke web app development services by harnessing a wide range of technologies to deliver robust, efficient, and scalable web app solutions.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-lg-6">
    <Card className="h-100  border-0 py-2 " style={{minHeight: "300px",backgroundColor:"#e6fcffdf" }}> {/* Reduced height */}
      <Card.Body>
        <Card.Title className='fs-1'> <BsCurrencyBitcoin/></Card.Title>
        <Card.Subtitle className="fs-4 mb-2 text-muted">Blockchain Development
        </Card.Subtitle>
        <Card.Text className='fs-5'>
          W3villa Technologies offer bespoke web app development services by harnessing a wide range of technologies to deliver robust, efficient, and scalable web app solutions.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

</div>

<div className="row g-4">
<div className="col-lg-6">
    <Card className="h-100  border-0 py-2 " style={{minHeight: "300px",backgroundColor:"#f0f0f0" }}> {/* Reduced height */}
      <Card.Body>
        <Card.Title className='fs-1'><LuGitCompareArrows /></Card.Title>
        <Card.Subtitle className="fs-4 mb-2 text-muted">Web-App Development</Card.Subtitle>
        <Card.Text className='fs-5'>
          W3villa Technologies offer bespoke web app development services by harnessing a wide range of technologies to deliver robust, efficient, and scalable web app solutions.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-lg-6">
    <Card className="h-100  border-0 py-2 " style={{minHeight: "300px",backgroundColor:"#fbffe6df" }}> {/* Reduced height */}
      <Card.Body>
        <Card.Title className='fs-1'><LuGitCompareArrows /></Card.Title>
        <Card.Subtitle className="fs-4 mb-2 text-muted">Web-App Development</Card.Subtitle>
        <Card.Text className='fs-5'>
          W3villa Technologies offer bespoke web app development services by harnessing a wide range of technologies to deliver robust, efficient, and scalable web app solutions.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

</div>


    </div>



  
      </div>
    </section>
  )
}

export default Services
