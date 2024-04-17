import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Appstore from './pages/Appstore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<Appstore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
