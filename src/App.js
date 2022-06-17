import React from 'react';
import { Navigate, Route, Router, Routes, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './components/Home';
import Copyright from './components/Copyright';

// User pages
import SignIn from './features/users/SignIn';
import SignUp from './features/users/SignUp';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  let { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: '1px solid black',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route
              path="/:url*(/+)"
              element={<Navigate to={pathname.slice(0, -1)} replace />}
            />
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export { App };
