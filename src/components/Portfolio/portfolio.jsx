import React from 'react'
import Card from './card'
import "./portfolio.css"
import Porfolio_data from './portfolio_data'

function Portfolio() {

  return (
    <>
      <section className="portfolio top " id='portfolio'>
          <div className="container">
              <div className="heading text-center">
                  <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                  <h1>My Portfolio</h1>
              </div>
              <div className="content grid">
                   {Porfolio_data.map((val, index) => {
                       return <Card key={index} image={val.image} category={val.category} title={val.title} desc1={val.desc1} desc2={val.desc2}/>
                   })}
              </div>
          </div>
      </section>
    </>
  )
}

export default Portfolio