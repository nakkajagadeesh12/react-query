import React from 'react';
import './style.css';
import { QueryClientProvider, QueryClient } from 'react-query';

export default function App() {
  return (
    <QueryClientProvider>
      <div>
        <h1>Hello StackBlitz!</h1>
      </div>
    </QueryClientProvider>
  );
}
