import React from 'react';

const FactTable = (el) => {
  let { facts } = el;

  console.log(facts);

  return (
    <div>
      <table id='rwd-table'>
        <thead>
          <tr>
            <th>Wartość</th>
            <th>Silnia</th>
          </tr>
        </thead>
        <tbody>
          {facts.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.val}</td>
                <td>{el.fact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FactTable;
