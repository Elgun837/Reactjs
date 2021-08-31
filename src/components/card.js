import React from 'react';

const Card = (props) =>{
    console.log(props)
    return(
        <div>
            <div className="card w-100">
                        <img src={props.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.cardTitle}</h5>
                                <p className="card-text">This card has supporting text below.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
        </div>
    )
}
export default Card