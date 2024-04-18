import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Appstore from './pages/Appstore';
import AppLayout from './pages/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/app" element={<Appstore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
