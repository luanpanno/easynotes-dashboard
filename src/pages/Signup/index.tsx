import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { authService } from '../../services/auth';
import {
  notificationSuccess,
  notificationError,
} from '../../utils/notifications';

import { Form, LoginContainer } from './styles';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleNameChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setName(ev.target.value);

  const handlePasswordChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setPassword(ev.target.value);

  const handleEmailChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setEmail(ev.target.value);

  const handleBirthdateChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setBirthdate(ev.target.value);

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    try {
      await authService.signup({ name, email, password, birthdate });

      notificationSuccess('Usuário criado com sucesso.');

      navigate('/login');
    } catch (error: any) {
      notificationError(error.message);
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={handleNameChange}
        />
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type='date'
          placeholder='Date'
          value={birthdate}
          onChange={handleBirthdateChange}
        />
        <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={handlePasswordChange}
        />
        <Link to='/login'>Voltar</Link>
        <button type='submit'>Cadastrar</button>
      </Form>
    </LoginContainer>
  );
};

export default Signup;
