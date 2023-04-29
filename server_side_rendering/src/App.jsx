import { useState, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Link } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const SearchParams = lazy(() =>
  import('./components/SearchParams')
    .then(({ SearchParams }) => ({
      default: SearchParams
    }))
)

const Details = lazy(() =>
  import('./pages/Details')
    .then(({ Details }) => ({
      default: Details
    }))
)

import { AdoptedPetContext } from './context/AdoptedPetContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true
    },
  },
});

export const App = () => {
  const adoptedPet = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </Suspense>
    </QueryClientProvider>
  );
};

