import React from 'react'
import Card from './card'
import resume_data from './resume_data'
import './resume.css'

function Resume() {
  return (
    <>
     <section className="resume" id="resume">
        <div className="container top">
            <div className="heading text-center">
                <h4>2+ ANS D'EXPERIENCE</h4>
                <h1>My Resume</h1>
            </div>
            <div className="content-section mtop d_flex">
                <div className="left">
                    <div className="heading">
                        <h4>20014-2020</h4>
                        <h1>Formations</h1>
                    </div>
                    <div className="content">
                        {resume_data.map((val,index) => {
                        if (val.category ==="education"){
                            return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc}/>
                        }
                        })}
                    </div>
                </div>
                <div className="left">
                    <div className="heading">
                        <h4>2019-2022</h4>
                        <h1>Experience Professionnelle</h1>
                    </div>
                    <div className="content">
                        {resume_data.map((val,index) => {
                        if (val.category ==="experience"){
                            return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc}/>
                        }
                        })}
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Resume