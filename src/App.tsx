import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DarkMode from './components/ui/DarkMode';
import MobileNavigationMenu from './components/ui/MobileNavigationMenu ';
import About from './pages/About';
import AppLayout from './pages/AppLayout';
import Appstore from './pages/Appstore';
import Articles from './pages/Articles';
import Faq from './pages/Faq';
import Guarantee from './pages/Guarantee';
import Help from './pages/Help';
import HomePage from './pages/HomePage';
import Host from './pages/Host';
import Invite from './pages/Invite';
import Jobs from './pages/Jobs';
import Room from './pages/Room';
import Rules from './pages/Rules';
import Support from './pages/Support';
import Wishes from './pages/Wishes';
import { store } from './redux/store';
import Article from './pages/Article';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DarkMode />
        <MobileNavigationMenu />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/host" element={<Host />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/room/:id" element={<Room />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/mag" element={<Articles />} />
          <Route path="/mag/category/:id" element={<Article />} />
          <Route path="/help" element={<Help />} />
          <Route path="/support" element={<Support />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/app" element={<Appstore />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
