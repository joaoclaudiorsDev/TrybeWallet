import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../../components/form';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
import Login from '../../pages/Login';

describe('teste a page Login', () => {
  test('renders login elements', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);

    expect(getByTestId('email-input')).toBeInTheDocument();
    expect(getByTestId('password-input')).toBeInTheDocument();
    expect(getByTestId('submit-button')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'example@example.com' },
    });

    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: '123456' },
    });
  });
});
