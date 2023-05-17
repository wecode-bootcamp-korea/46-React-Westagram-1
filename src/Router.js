import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 김민지의 컴포넌트
import LoginMinji from './pages/minji/Login/LoginMinji';
import MainMinji from './pages/minji/Main/MainMinji';

// 김지연의 컴포넌트
import LoginJiyeon from './pages/jiyeon/Login/LoginJiyeon';
import MainJiyeon from './pages/jiyeon/Main/MainJiyeon';

//조혜진의 컴포넌트
import LoginKris from './pages/kris/Login/LoginKris';
import MainKris from './pages/kris/Main/MainKris';

//조수진의 컴포넌트
import LoginSuzin from './pages/suzin/Login/LoginSuzin';
import MainSuzin from './pages/suzin/Main/MainSuzin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginminji" element={<LoginMinji />} />
        <Route path="/mainminji" element={<MainMinji />} />

        <Route path="/loginjiyeon" element={<LoginJiyeon />} />
        <Route path="/mainjiyeon" element={<MainJiyeon />} />

        <Route path="/loginkris" element={<LoginKris />} />
        <Route path="/mainkris" element={<MainKris />} />

        <Route path="/loginsuzin" element={<LoginSuzin />} />
        <Route path="/mainsuzin" element={<MainSuzin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
