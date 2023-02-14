import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';

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
