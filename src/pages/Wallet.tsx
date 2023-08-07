import { useSelector } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

function Wallet() {
  const expenses = useSelector((state) => state.wallet.expenses);
  return (
    <>
      <Header />
      <WalletForm />
      <Table expenses={ expenses } />
    </>
  );
}

export default Wallet;
