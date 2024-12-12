import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';

export default function Layout(): React.JSX.Element {
  return (
    <div>
      <NavBar />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
