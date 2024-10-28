import React from 'react'
import "./Card.css"
import ViewPricingBtn from './ViewPricingBtn'

const Card = (props) => {

    return (
        <div className='card'>
            <div className="cardLeft">
                <h1>{props.heading}</h1>
            </div>
            <div className="cardRight">
                <ViewPricingBtn />
                <p>{props.details}</p>
                <ul>
                    {[props.li1, props.li2, props.li3, props.li4, props.li5, props.li6].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Card