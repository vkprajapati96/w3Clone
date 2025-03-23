import React from 'react'
import "./Experience.css"

function Experience() {
  return (
    <section className="experience-con container-fluid">
    <div className="experience-main container">
        <div className="experience row gx-5">
        
          <div className="experience-description  col-lg-6   ">
            <div>
              <h4>Our Experience</h4>
              <h2>Experts <br/>
              with experience</h2>
              <p className='pt-3'>
              With years of experience, we have developed multiple solutions and large enterprise applications, proving our prowess in the design and development of software solutions. We have unmatched deep industry expertise and experience to harness the latest IT advancements to deliver custom solutions that perfectly fit the needs and behavior of your users.
              </p>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="row gx-3">
                <div className="col-6">
                    <div className='explore_nos text-center'>
                    <div className='count fs-sm-1'>
                    75+
                    </div>
                    <span>Happy Clients</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className='explore_nos text-center'>
                    <div className='count fs-sm-1'>
                    100+
                    </div>
                    <span>Team Members</span>
                    </div>
                </div>
            </div>
            <div className="row  gx-3 py-5">
            <div className="col-6">
                    <div className='explore_nos text-center'>
                    <div className='count fs-sm-1'>
                    10+
                    </div>
                    <span>Years of Experience</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className='explore_nos text-center'>
                    <div className='count fs-sm-1'>
                    200+
                    </div>
                    <span>Projects Delivered</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>






    </section>
  )
}

export default Experience
