import React from 'react';


const Table = ({netIncomes}) => {
  
    return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingreso neto</th>
        </tr>
      </thead>
      
      <tbody>
        {netIncomes.map((item,i) => (
          <tr key={i}>
            <td>{item.brand}</td>
            <td>{item.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Table;