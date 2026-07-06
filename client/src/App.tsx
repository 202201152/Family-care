import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Home } from './features/home/Home';

import { Family } from './features/family/Family';
import { Health } from './features/health/Health';
import { Reports } from './features/reports/Reports';
import { More } from './features/more/More';

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
