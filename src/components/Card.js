import React from 'react'

import sPhoto from '../images/star.png'



const Card = (props) => {
 
  let badgeText 
  if(props.item.openSports === 1){
    badgeText = "SOLD OUT"
  } else if(props.item.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className='card'>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} alt ="" className="card--image" />
            <div className="card--stats">
                <img src={sPhoto} alt=""className="card--star" />
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>

    </div>
  )
}

export default Card