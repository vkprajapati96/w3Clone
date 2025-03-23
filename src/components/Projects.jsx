import React from 'react'
import "./Projects.css"
import { FaArrowAltCircleRight } from "react-icons/fa";


function Projects() {
  return (
    <section className="container-fluid">
    <div className="container text-center mt-5 d-flex flex-column align-items-center gap-3 ">
      <h4 className='fs-6 text-secondary'>We Make Connections </h4>
      <h2>Explore recent projects</h2>
      <p className='fs-5 text-secondary	'>
      We use agile methodologies to transform ideas into insight and customize according to the business goals.
      </p>

      <div className="d-flex flex-column gap-5">
        {/* ist part */}
        <div className="row mt-5 ">
          <div className="col">
            <div className="text-start">
              <h2 className='text-dark'>
              Aftermarket online platform for <br />
              Vendor and Yard Management
              </h2>
              <p className="pt-3">
                With years of experience, we have developed multiple solutions
                and large enterprise applications, proving our prowess in the
                design and development of software solutions. We have
                unmatched deep industry expertise and experience to harness
                the latest IT advancements to deliver custom solutions that
                perfectly fit the needs and behavior of your users.
              </p>
              <h5 className='text-dark fs-bolder'>Solution</h5>
              <p>To handle yard and vendors, we created the full platform as well as the internal portal. Many suppliers can sell their aftermarket goods to salvage yards thanks to the platform.</p>
              <h6 className='fs-5 text-dark fw-semibold'>case study <span className='text-primary'><FaArrowAltCircleRight/></span></h6>
            </div>
          </div>
          <div className="col">
              <div>
                  <img  className="img-fluid" src="https://www.w3villa.com/production/assets/landing_page/aftermath-207cdbfcdd9077bd5568f1f039bb497380f37ed741a70c17edc1bf7ffd6ab402.webp" alt="" />
              </div>
          </div>
        </div>
{/* 2nd part */}

        <div className="row mt-5">
        <div className="col">
              <div>
                  <img  className="img-fluid" src="https://www.w3villa.com/production/assets/landing_page/project-2-3ae7e318fcc0c420934c812e474aa95578bab67541bf2fca390a214571f60eee.webp" alt="" />
              </div>
          </div>
          <div className="col">
            <div className="text-start">
            <h2>
              An ecommerce platform <br />
                      for pets gear
              </h2>
              <p className="pt-3">
              Buyrogz is a well-known supplier of pet accessories that are of the highest caliber and are built to last. Basic recyclable packaging is used for delivery to cut down on waste.


              </p>
              <h5>Solution</h5>
              <p>This is a success story of an E-commerce solution that we developed to meet clients’ needs. We added a number of features to the website to make it more user-friendly, such as a celebrity page design that enables users to promote their pets as celebrities on the internet..</p>
              <h6 className='fs-5 text-dark fw-semibold'>case study <span className='text-primary'><FaArrowAltCircleRight/></span></h6>

            </div>
          </div>
         
        </div>
        {/* 3rd part */}
        <div className="row mt-5">
          <div className="col">
            <div className="text-start">
              <h2>
              An ecommerce platform <br />
                      for pets gear
              </h2>
              <p className="pt-3">
                With years of experience, we have developed multiple solutions
                and large enterprise applications, proving our prowess in the
                design and development of software solutions. We have
                unmatched deep industry expertise and experience to harness
                the latest IT advancements to deliver custom solutions that
                perfectly fit the needs and behavior of your users.
              </p>
              <h5>Solution</h5>
              <p>To handle yard and vendors, we created the full platform as well as the internal portal. Many suppliers can sell their aftermarket goods to salvage yards thanks to the platform.</p>
              <h6 className='fs-5 text-dark fw-semibold'>case study <span className='text-primary'><FaArrowAltCircleRight/></span></h6>
            </div>
          </div>
          <div className="col">
              <div>
                <img className="image-fluid" src="https://www.w3villa.com/production/assets/landing_page/marketplace-8594c5116a383ff23cfee4c6178000ff2a9223fbb31f8d4a8ccc5ef107d99d6d.webp" alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects
