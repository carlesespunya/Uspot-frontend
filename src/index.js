import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './context/AuthContext';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProviderWrapper>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProviderWrapper>
  </Router>
);
