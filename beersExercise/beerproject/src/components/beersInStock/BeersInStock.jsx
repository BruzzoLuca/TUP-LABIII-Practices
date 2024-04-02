import React from 'react'

const BeersInStock = ({ cermesas}) => {
    const availableBeers = cermesas.filter((beer) => beer.available);

    return (
        
        <div>
            <h1>Cervezas en stock: </h1>

            <ul>
                {availableBeers.map((beer) => (
                    <li key={beer.id}>
                        <strong>{beer.beerName}</strong> - {beer.beerStyle} - Precio: ${beer.price}
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default BeersInStock