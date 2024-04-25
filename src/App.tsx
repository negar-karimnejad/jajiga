import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Appstore from './pages/Appstore';
import Articles from './pages/Articles';
import HomePage from './pages/HomePage';
import { store } from './redux/store';
import DarkMode from './components/ui/DarkMode';
import Wishes from './pages/Wishes';
import Host from './pages/Host';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DarkMode />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/host" element={<Host />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/mag" element={<Articles />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/app" element={<Appstore />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
