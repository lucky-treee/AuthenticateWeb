import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Path from 'constants/path';
import MainPage from 'pages/MainPage';
import SearchIdPage from 'pages/SearchIdPage';
import SearchPasswordPage from 'pages/SearchPasswordPage';
import SignUpPage from 'pages/SignUpPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Path.ROOT} element={<MainPage />} />
      <Route path={Path.SIGN_UP} element={<SignUpPage />} />
      <Route path={Path.SEARCH_ID} element={<SearchIdPage />} />
      <Route path={Path.SEARCH_PASSWORD} element={<SearchPasswordPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
