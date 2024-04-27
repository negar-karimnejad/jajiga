import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DarkMode from './components/ui/DarkMode';
import AppLayout from './pages/AppLayout';
import Appstore from './pages/Appstore';
import Articles from './pages/Articles';
import Faq from './pages/Faq';
import Guarantee from './pages/Guarantee';
import HomePage from './pages/HomePage';
import Host from './pages/Host';
import Wishes from './pages/Wishes';
import { store } from './redux/store';
import Invite from './pages/Invite';
import Rules from './pages/Rules';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DarkMode />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/host" element={<Host />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/rules" element={<Rules />} />
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
