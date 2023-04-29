import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SearchParams } from './components/SearchParams';
import { Details } from './pages/Details';

import store from './store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
