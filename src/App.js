import React from 'react';
import './style.css';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <div>
        <h1>Hello StackBlitz!</h1>
      </div>
    </QueryClientProvider>
  );
}
