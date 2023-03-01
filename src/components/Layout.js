import { AppBar } from './AppBar';
import { Outlet } from 'react-router-dom';
import { Box } from './Box';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};
