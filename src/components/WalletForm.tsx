import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { addExpense } from '../redux/actions';
import { fetchCurrencies } from '../redux/actions/requisitionApi';
import { ExpenseData, RootState } from '../types';

function WalletForm() {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const currencies = useSelector((state: RootState) => state.wallet.currencies);
  const exchangeRate = useSelector((state: RootState) => state.wallet.exchangeRate);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCurrency = 'BRL';
    const rate = exchangeRate[selectedCurrency]?.ask || 1;

    const newExpense: ExpenseData = {
      id: Date.now(),
      value: parseFloat(value) * rate,
      description,
    };

    dispatch(addExpense(newExpense));
    setValue('');
    setDescription('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        data-testid="value-input"
        type="text"
        name="value"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        placeholder="Value"
      />
      <input
        data-testid="description-input"
        type="text"
        name="description"
        value={ description }
        onChange={ (e) => setDescription(e.target.value) }
        placeholder="Description"
      />
      <select data-testid="currency-input">
        {currencies.map((currency) => (
          <option key={ currency } value={ currency }>
            {currency}
          </option>
        ))}
      </select>
      <select data-testid="method-input">
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
      <select data-testid="tag-input">
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
}

export default WalletForm;
