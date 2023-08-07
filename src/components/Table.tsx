import React from 'react';
import mockData from '../tests/helpers/mockData';
import { ExpenseData } from '../types';

function getCurrencyFullName(currencyCode) {
  const currency = mockData[currencyCode];
  if (currency) {
    return `${currency.name} (${currency.code}/${currency.codein})`;
  }
  return currencyCode;
}

function Table({ expenses }) {
  const convertValue = (value, exchangeRate) => {
    return (value * exchangeRate).toFixed(2);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          const currency = mockData[expense.currency];
          const exchangeRate = currency ? parseFloat(currency.ask) : 1;
          const convertedValue = convertValue(parseFloat(expense.value), exchangeRate);

          return (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{parseFloat(expense.value).toFixed(2)}</td>
              <td>{getCurrencyFullName(expense.currency)}</td>
              <td>{exchangeRate.toFixed(2)}</td>
              <td>{convertedValue}</td>
              <td>Real</td>
              <td>
                <button> Botão bem massa</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
