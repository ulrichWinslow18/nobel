import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="box btn-shadow">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a href="https://google.com">
                <i className="fas fa-arrow-right">
                </i>
            </a>
        </div>
    </div>
  )
}

export default Card