import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useOfflineCheck } from './OfflineRedirect ';
import DarkMode from './components/ui/DarkMode';
import MobileNavigationMenu from './components/ui/MobileNavigationMenu ';
import About from './pages/About';
import AddNewRoom from './pages/AddNewRoom';
import AppLayout from './pages/AppLayout';
import Appstore from './pages/Appstore';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Author from './pages/Author';
import CategoryArticle from './pages/CategoryArticle';
import Faq from './pages/Faq';
import Guarantee from './pages/Guarantee';
import Help from './pages/Help';
import HomePage from './pages/HomePage';
import Host from './pages/Host';
import Hosting from './pages/Hosting';
import Invite from './pages/Invite';
import Jobs from './pages/Jobs';
import OfflinePage from './pages/OfflinePage';
import Room from './pages/Room';
import Rules from './pages/Rules';
import Support from './pages/Support';
import Wishes from './pages/Wishes';
import { store } from './redux/store';
import Rooms from './pages/Rooms';
import Finance from './pages/Finance';

function App() {
  const { isOnline } = useOfflineCheck();

  if (!isOnline) return <OfflinePage />;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <DarkMode />
        <MobileNavigationMenu />
        <Routes>
          {/* <Route element={<BlankLayout />}></Route> */}
          <Route element={<AppLayout />}>
            <Route path="/host" element={<Hosting />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/room/:id" element={<Room />} />
            <Route path="/s/:id" element={<Rooms />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/mag" element={<Articles />} />
          <Route path="/create" element={<AddNewRoom />} />
          <Route path="/mag/:id" element={<Article />} />
          <Route path="/mag/category/:id" element={<CategoryArticle />} />
          <Route path="/mag/author/:id" element={<Author />} />
          <Route path="/help" element={<Help />} />
          <Route path="/support" element={<Support />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/user/:id" element={<Host />} />
          <Route path="/app" element={<Appstore />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
