import React from 'react'
import './Education.css'

const Education = () => {
  return (
      <section className='education' id="education">
          <h2 className='heading'>My <span>Journey</span></h2>
          <div className="education-row">
              <div className="education-column">
                  <h3 className="title">Education</h3>
                  
                  <div className="education-box">
                      <div className="education-content">
                          <div className="content">
                              <div className="year"><i class='bx bxs-calendar'></i>2012 - 2017</div>
                              <h3>Bachelors' Degree -  Ekiti State University, Ado-Ekiti</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis aspernatur dolores quam, hic similique?</p>
                          </div>
                      </div>

                      <div className="education-content">
                          <div className="content">
                              <div className="year"><i class='bx bxs-calendar'></i>2006 - 2017</div>
                              <h3>Class of 2017</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis aspernatur dolores quam, hic similique?</p>
                          </div>
                      </div>

                      <div className="education-content">
                          <div className="content">
                              <div className="year"><i class='bx bxs-calendar'></i>2022 - 2023</div>
                              <h3>Unad - 2008</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis aspernatur dolores quam, hic similique?</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="education-column">
                  <h3 className="title">Experience</h3>
                  
                  <div className="education-box">
                      <div className="education-content">
                          <div className="content">
                              <div className="year"><i class='bx bxs-calendar'></i>2012 - 2017</div>
                              <h3>Software Engineer (Frontend) -  Sep 2022- Date - Tefy Corp</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis aspernatur dolores quam, hic similique?</p>
                          </div>
                      </div>

                      <div className="education-content">
                          <div className="content">
                              <div className="year"><i class='bx bxs-calendar'></i>2006 - 2011</div>
                              <h3>Software Engineer - Oxford Internation Group</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis aspernatur dolores quam, hic similique?</p>
                          </div>
                      </div>

                      <div className="education-content">
                          <div className="content">
                              <div className="year"><i class='bx bxs-calendar'></i>Software Engineer Intern</div>
                              <h3>Stutern Limited - 2019</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis aspernatur dolores quam, hic similique?</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Education