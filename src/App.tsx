import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@contexts/AuthContext';

import Routes from '@routes/Routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;