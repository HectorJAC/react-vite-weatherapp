import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
