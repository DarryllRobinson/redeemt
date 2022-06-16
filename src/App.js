import React from 'react';
import { Navigate, Route, Router, Routes, useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';

import Home from './components/Home';

function App() {
  let { pathname } = useLocation();

  return (
    <Container>
      <Routes>
        <Route
          path="/:url*(/+)"
          element={<Navigate to={pathname.slice(0, -1)} replace />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export { App };
