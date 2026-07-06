import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Home } from './features/home/Home';

// Placeholder components
const Family = () => <div className="p-6"><h1>Family Members</h1></div>;
const Health = () => <div className="p-6"><h1>Health Records</h1></div>;
const Reports = () => <div className="p-6"><h1>Reports</h1></div>;
const More = () => <div className="p-6"><h1>More Settings</h1></div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="family" element={<Family />} />
          <Route path="health" element={<Health />} />
          <Route path="reports" element={<Reports />} />
          <Route path="more" element={<More />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
