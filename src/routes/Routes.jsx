import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Layout from '../components/Layout/Layout';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
