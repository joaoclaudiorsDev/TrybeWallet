import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import Login from '../../pages/Login';
import Wallet from '../../pages/Wallet';
import mockData from './mockData';

describe('Login page tests', () => {
  test('renders login elements', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const emailId = 'email-input';

    expect(getByTestId(emailId)).toBeInTheDocument();
    expect(getByTestId('password-input')).toBeInTheDocument();
    expect(getByTestId('submit-button')).toBeInTheDocument();

    fireEvent.change(getByTestId(emailId), {
      target: { value: 'example@example.com' },
    });

    fireEvent.change(getByTestId('password-input'), {
      target: { value: '123456' },
    });

    expect(getByTestId(emailId)).toHaveValue('example@example.com');
  });
});

describe('Header tests', () => {
  test('renders wallet Header elements', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Wallet />);

    expect(getByTestId('total-field')).toBeInTheDocument();
    expect(getByTestId('header-currency-field')).toBeInTheDocument();
    expect(getByTestId('email-field')).toBeInTheDocument();
  });

  test('renders wallet Input elements', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Wallet />);

    expect(getByTestId('value-input')).toBeInTheDocument();
    expect(getByTestId('description-input')).toBeInTheDocument();
    expect(getByTestId('currency-input')).toBeInTheDocument();
    expect(getByTestId('method-input')).toBeInTheDocument();
    expect(getByTestId('tag-input')).toBeInTheDocument();
  });
});

describe('Wallet tests', () => {
  test('The initial amount of the expense must be 0 and the text BRL is on the screen', () => {
    renderWithRouterAndRedux(<Wallet />);

    const expenseValue = screen.getByText(/0\.00/i);
    expect(expenseValue).toBeTruthy();

    const brlCurrency = screen.getByText(/brl/i);
    expect(brlCurrency).toBeInTheDocument();
  });

  test('displays the correct email from the Redux state', () => {
    const userEmail = 'test@example.com';
    const initialState = {
      user: {
        email: userEmail,
      },
    };
    const { getByTestId } = renderWithRouterAndRedux(<Wallet />, { initialState });
    const emailField = getByTestId('email-field');

    expect(emailField).toBeInTheDocument();
    expect(emailField).toHaveTextContent(userEmail);
  });

  test('updates currency state on select change', () => {
    renderWithRouterAndRedux(<Wallet />);

    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');
    const currencyInput = screen.getByTestId('currency-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');
    const submitButton = screen.getByRole('button', { name: /Adicionar Despesa/i });

    fireEvent.change(valueInput, { target: { value: '50' } });
    fireEvent.change(descriptionInput, { target: { value: 'Compras' } });
    fireEvent.change(currencyInput, { target: { value: 'USD' } });
    fireEvent.change(methodInput, { target: { value: 'Cartão de crédito' } });
    fireEvent.change(tagInput, { target: { value: 'Lazer' } });

    expect(valueInput).toHaveValue('50');
    expect(descriptionInput).toHaveValue('Compras');
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toHaveValue('Cartão de crédito');
    expect(tagInput).toHaveValue('Lazer');

    fireEvent.click(submitButton);
  });
});
