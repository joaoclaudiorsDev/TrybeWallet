import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrencies } from '../redux/actions/requisitionApi';
import { RootState } from '../types';

function WalletForm() {
  const dispatch = useDispatch();
  const currencies = useSelector((state: RootState) => state.wallet.currencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <form>
      <input data-testid="value-input" />
      <input data-testid="description-input" />
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
