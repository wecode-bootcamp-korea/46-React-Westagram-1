import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sample from './pages/minji/Sample/Sample';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
