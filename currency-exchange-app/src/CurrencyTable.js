import React from 'react';

const CurrencyTable = (props) => {
  const { base, rates } = props;
  if (!rates) {
    return null;
  }
  return (
    <div className="table-responsive border">
    <table className="table table-sm table-striped mt-4 table-bordered text-center">
      <thead>
        <tr>
          <th scope="col">Currency</th>
          <th scope="col" className="text-right pr-4 py-2">1.00 {base}</th>
        </tr>
      </thead>
      <tbody>
        {rates.map(currency =>
          <tr key={currency.acronym}>
            <td className="pl-4 py-2">{currency.name} <small>({currency.acronym})</small></td>
            <td className="text-right pr-4 py-2">{currency.rate.toFixed(2)}</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  )
}

export default CurrencyTable