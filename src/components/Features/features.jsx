import React from 'react'
import Card from './card'
import './features.css'
import data from'./featuresApi'
const Features = () => {
  return (
    <>
    <section className="features-top" id="features">
        <div className="container">
            <div className="heading">
                <h4>COMPETENCES</h4>
                <h1>SAVOIR FAIRE</h1>
            </div>
        </div>

        <div className="content grid">
            {data.map((val, index)=>{
                return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
        </div>
    </section>
    </>
  )
}

export default Features