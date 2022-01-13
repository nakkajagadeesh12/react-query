import React from 'react';
import './style.css';
import Hello from './Hello.js';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <div>
        <h1>Welcome Users</h1>
        <Hello />
      </div>
    </QueryClientProvider>
  );
}
