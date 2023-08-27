import React from 'react';

const Card = (props) => {

    const { name, price, stock, country_of_origin } = props

    return (
        <div style={{ margin: "10px", padding: "10px", border: "1px solid black" }} >
            <h1>{name}:</h1>
            <div>Price: {price}</div>
            <div>Stock left: {stock}</div>
            <div>Country of origin: {country_of_origin}</div>
        </div>
    );
};

export default Card;