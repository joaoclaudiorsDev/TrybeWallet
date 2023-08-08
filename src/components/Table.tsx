import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDeletExpense } from '../redux/actions';
import mockData from '../tests/helpers/mockData';
import { ExpenseData2 } from '../types';

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

  const handleEdit = () => {
    console.log('plimplim');
  };
  const dispatch = useDispatch();

  const handleDelete = (expenseId: number) => {
    dispatch(setDeletExpense(expenseId));
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
                <button onClick={ handleEdit }> Editar</button>
                <button
                  data-testid="delete-btn"
                  onClick={
                  () => handleDelete(expense.id)
                  }
                >
                  Excluir

                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
