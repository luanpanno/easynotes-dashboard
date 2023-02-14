import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '@contexts/AuthContext';

import { authService } from '@services/auth';

import { notificationSuccess, notificationError } from '@utils/notifications';

import { Form, LoginContainer } from './styles';

const Login = () => {
  const navigate = useNavigate();
  const { saveUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setEmail(ev.target.value);

  const handlePasswordChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setPassword(ev.target.value);

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    try {
      const user = await authService.login({ email, password });

      notificationSuccess('Usuário autenticado com sucesso');

      saveUser(user);

      navigate('/dashboard');
    } catch (error: any) {
      notificationError(error.message);
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={handlePasswordChange}
        />
        <span>
          Esqueceu sua senha? <Link to='/'>Recupere aqui</Link>
        </span>
        <Link to='/signup'>Cadastrar</Link>
        <button type='submit'>Entrar</button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
