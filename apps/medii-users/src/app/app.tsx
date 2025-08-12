import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UsersPage } from '../pages/UsersPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersPage />
    </QueryClientProvider>
  );
}

export default App;
