import React from 'react';
import { useSelector } from 'react-redux';
import { AppState, ExpenseData } from '../types';

function Header() {
  const expenses = useSelector((state: AppState) => state.wallet.expenses);
  console.log('Expenses:', expenses);
  const exchangeRate = useSelector((state: AppState) => state.wallet.exchangeRate);
  const email = useSelector((state: AppState) => state.user.email);

  const calculateTotalExpensesInBRL = () => {
    return expenses.reduce((total: number, expense: ExpenseData) => {
      const rate = exchangeRate[expense.currency]?.ask || 1;
      const expenseValue = parseFloat(expense.value);
      console.log('currency:', expense.currency, 'rate:', rate, 'value:', expense.value);
      return total + expenseValue * rate;
    }, 0);
  };

  const totalExpensesInBRL = calculateTotalExpensesInBRL().toFixed(2);

  return (
    <header>
      <div>
        <h2 data-testid="total-field">{totalExpensesInBRL}</h2>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
      <h4 data-testid="email-field">{email}</h4>
    </header>
  );
}

export default Header;
