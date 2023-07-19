import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/actions';

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  type LoginType = {
    email: string;
    senha: string;
  };

  const [form, setForm] = useState<LoginType>({ email: '', senha: '' });

  const { email, senha } = form;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = senha.length >= 6;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    setForm({ ...form, [targetName]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(setUserData(form));
      navigate('/carteira');
    }
  };

  return (
    <form action="" onSubmit={ handleSubmit }>
      <input
        data-testid="email-input"
        placeholder="E-mail"
        value={ email }
        name="email"
        required
        onChange={ handleChange }
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="Senha"
        value={ senha }
        name="senha"
        required
        onChange={ handleChange }
      />
      <button
        type="submit"
        disabled={ !isFormValid }
      >
        Entrar
      </button>
    </form>
  );
}

export default Form;
