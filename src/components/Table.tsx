import React from 'react';
import mockData from '../tests/helpers/mockData';
import { CurrencyData, ExpenseData2 } from '../types';

interface TableProps {
  expenses: ExpenseData2[];
}
type CurrencyCode = keyof typeof mockData;

function getCurrencyFullName(currencyCode: CurrencyCode) {
  const currency = mockData[currencyCode];
  if (currency) {
    return `${currency.name} (${currency.code}/${currency.codein})`;
  }
  return currencyCode;
}

function Table({ expenses }: TableProps) {
  const convertValue = (value: string, exchangeRate: number) => {
    return (parseFloat(value) * exchangeRate).toFixed(2);
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
          const currency = mockData[expense.currency as CurrencyCode];
          const exchangeRate = currency ? parseFloat(currency.ask) : 1;
          const convertedValue = convertValue(expense.value, exchangeRate);

          return (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{parseFloat(expense.value).toFixed(2)}</td>
              <td>{getCurrencyFullName(expense.currency as CurrencyCode)}</td>
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
