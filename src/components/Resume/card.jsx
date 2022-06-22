import React from 'react'

const Card = (props) => {
  return (
    <>
     <div className="box btn-shadow">
        <div className="title-content d_flex">
            <div className="title">
                <h2>{props.title}</h2>
                <span> {props.year} </span>
            </div>
            <div className="rate">
                <button className="btn-shadow"> {props.rate} </button>
            </div>
        </div>
        <hr/>
        <p> {props.desc} </p>
     </div>
    </>
  )
}

export default Card