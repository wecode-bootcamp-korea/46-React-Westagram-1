import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

// 김민지의 컴포넌트
import LoginMinji from './pages/minji/Login/Login';
import MainMinji from './pages/minji/Main/Main';

// 김지연의 컴포넌트
import LoginJiyeon from './pages/jiyeon/Login/Login';
import MainJiyeon from './pages/jiyeon/Main/Main';

//조혜진의 컴포넌트
import LoginKris from './pages/kris/Login/Login';
import MainKris from './pages/kris/Main/Main';

//조수진의 컴포넌트
import LoginSuzin from './pages/suzin/Login/Login';
import MainSuzin from './pages/suzin/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
