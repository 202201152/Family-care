import React from 'react';
import { Outlet } from 'react-router';
import { BottomNav } from './BottomNav';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-surface flex flex-col md:items-center">
      {/* Mobile container - restricts width on desktop to simulate mobile app */}
      <main className="w-full max-w-md min-h-screen bg-surface relative pb-24 shadow-sm md:border-x md:border-divider">
        <Outlet />
        <BottomNav />
      </main>
    </div>
  );
};
