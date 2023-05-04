import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import FormPage from '../components/pages/FormPage';
import StartPage from '../components/pages/StartPage';
import MixingPage from '../components/pages/LoginPage/MixingPage';
import ReceivePage from '../components/ReceivePage';

/**
 * Router component renders a route switch with all available pages
 */

const Router = () => {
  //const { checkRole } = useContext(ActiveUserContext);

  /** navigate to different "home"-locations depending on Role the user have */

  return (
    <Routes>
      <Route path={'/start'} element={<StartPage />} />
      <Route path={'/form'} element={<FormPage />} />
      <Route path={'/mixer'} element={<MixingPage />} />
      <Route path={'/receive'} element={<ReceivePage />} />

    </Routes>
  );
};

export default Router;
