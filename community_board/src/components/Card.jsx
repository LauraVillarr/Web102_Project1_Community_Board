import React from "react";


const Card = (props) => {
    return (
        <div className="Card">
            <img className="card_img" src={props.image} alt={props.alt} />
            <h3 className="card_item">{props.name}</h3>
            <h5 className="card_item">Best food: {props.food}</h5>
            <a href={props.link}>
            <button className="card_item">See Menu</button>
            </a>
        </div>
    )
}

export default Card;