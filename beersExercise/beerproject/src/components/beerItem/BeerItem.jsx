import PropTypes from 'prop-types';



const BeerItem = ({name,style,price,available}) => {
let precioDolar = 1000;

    
  return (
    <div>
        <h2>Nombre: {name}</h2>
        <h3>Estilo: {style}</h3>
        <div>Precio: {price * precioDolar }</div>
        <p>Disponibilidad: {available}</p>
    </div>
  )
};

BeerItem.propTypes = {
    name: PropTypes.string,
    style: PropTypes.string,
    price:PropTypes.number,
    available:PropTypes.boolean,
};


export default BeerItem 