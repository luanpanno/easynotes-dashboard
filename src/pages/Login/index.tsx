import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@contexts/AuthContext';

import { Form, LoginContainer } from './styles';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setEmail(ev.target.value);

  const handlePasswordChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setPassword(ev.target.value);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    login({ email, password });
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
        />
        <span>
          Esqueceu sua senha? <Link to="/">Recupere aqui</Link>
        </span>
        <Link to="/signup">Cadastrar</Link>
        <button type="submit">Entrar</button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
