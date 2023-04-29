import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SearchParams } from './components/SearchParams';
import { Details } from './pages/Details';
import { AdoptedPetContext } from './context/AdoptedPetContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <div
      className="p-0 m-0" 
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <BrowserRouter>
            <header
              className='w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500'
            >
              <Link to="/" className='text-6xl text-white hover:text-gray-200'>Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
