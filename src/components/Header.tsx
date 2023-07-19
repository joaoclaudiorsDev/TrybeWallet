import { useSelector } from 'react-redux';
import { AppState } from '../types';

function Header() {
  const email = useSelector((state: AppState) => state.user.email);

  return (
    <header>
      <div>
        <h2 data-testid="total-field"> 0 </h2>
        <h3 data-testid="header-currency-field"> BRL </h3>
      </div>
      <h4 data-testid="email-field">
        { email }
      </h4>
    </header>
  );
}

export default Header;
