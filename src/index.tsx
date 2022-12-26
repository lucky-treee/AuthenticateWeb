import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle, { theme } from './GlobalStyle';
import worker from 'mocks';
import 'index.css';
import 'i18n';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const queryClient = new QueryClient();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
