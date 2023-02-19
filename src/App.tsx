import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '@contexts/AuthContext';
import { CollectionsProvider } from '@contexts/CollectionsContext';
import { DashboardProvider } from '@contexts/DashboardContext';
import { LoadingProvider } from '@contexts/LoadingContext';
import { NotesProvider } from '@contexts/NotesCollection';

import Routes from '@routes/Routes';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <LoadingProvider>
        <AuthProvider>
          <CollectionsProvider>
            <NotesProvider>
              <DashboardProvider>
                <Routes />
              </DashboardProvider>
            </NotesProvider>
          </CollectionsProvider>
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
