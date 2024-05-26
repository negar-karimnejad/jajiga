import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useOfflineCheck } from './OfflineRedirect ';
import SigningModal from './components/auth/SigningModal';
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
import Finance from './pages/Finance';
import Guarantee from './pages/Guarantee';
import Help from './pages/Help';
import HomePage from './pages/HomePage';
import Host from './pages/Host';
import Hosting from './pages/Hosting';
import Invite from './pages/Invite';
import Jobs from './pages/Jobs';
import NewRoom from './pages/NewRoom';
import OfflinePage from './pages/OfflinePage';
import Profile from './pages/Profile';
import Room from './pages/Room';
import Rooms from './pages/Rooms';
import Rules from './pages/Rules';
import Support from './pages/Support';
import Wishes from './pages/Wishes';
import { store } from './redux/store';

function App() {
  const { isOnline } = useOfflineCheck();
  if (!isOnline) return <OfflinePage />;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="max-md:hidden">
          <DarkMode />
        </div>
        <MobileNavigationMenu />
        <SigningModal />
        <Routes>
          {/* <Route element={<BlankLayout />}></Route> */}
          <Route element={<AppLayout />}>
            <Route path="/host" element={<Hosting />} />
            <Route path="/newroom" element={<NewRoom />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/room/:id" element={<Room />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/s" element={<Rooms />} />
          <Route path="/s/:id" element={<Rooms />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/mag" element={<Articles />} />
          <Route path="/create" element={<AddNewRoom />} />
          <Route path="/mag/:id" element={<Article />} />
          <Route path="/mag/category/:id" element={<CategoryArticle />} />
          <Route path="/mag/author/:id" element={<Author />} />
          <Route path="/help" element={<Help />} />
          <Route path="/support" element={<Support />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/:id" element={<Host />} />
          <Route path="/app" element={<Appstore />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
