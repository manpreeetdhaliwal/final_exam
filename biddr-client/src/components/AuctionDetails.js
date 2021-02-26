import React from 'react';
const AuctionDetails = (props) => {
    const { title, body, end_date, reserve_price, created_at, updated_at} = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>Ending on {end_date}</p>
            <p>Reserve Price: ${reserve_price}</p>
            <p>
                <small>Posted on: {created_at.toLocaleString()}</small>
                <br></br>
                <small>Last edited: {updated_at.toLocaleString()}</small>
            </p>
        </div>
    )
}
export default AuctionDetails;