import React from "react";

const RedAndIpaCounter = ({ cermesas }) => {
    let redBeerCount = 0;
    let ipaBeerCount = 0;

    cermesas.forEach(beer => {
        if (beer.beerStyle === "Red") {
            redBeerCount++;
        } else if (beer.beerStyle === "IPA") {
            ipaBeerCount++;
        }
    });

    return (
        <div>
            <h2>Cantidad de cervezas por estilo:</h2>
            <p>Cervezas de estilo Red: {redBeerCount}</p>
            <p>Cervezas de estilo IPA: {ipaBeerCount}</p>
        </div>
    );
};

export default RedAndIpaCounter;