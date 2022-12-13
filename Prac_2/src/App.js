import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import { ROUTES } from './routes/routes'
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            {ROUTES.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element} />
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
