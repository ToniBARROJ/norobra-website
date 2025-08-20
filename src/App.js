import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { OurBuilds } from './pages/OurBuilds';
import { Contact } from './pages/Contact'
import { LegalAdvise } from './pages/Policies/Legal Advise';
import { PrivacyPolicies } from './pages/Policies/Privacy policies';
import { CookiePreferences } from './pages/Policies/Cookie prefrences';
import { CookiePolicies } from './pages/Policies/Cookie policies';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ScrollToTop } from './components/ScrollToTop';
import { CookieBanner } from './components/CookieBanner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <main id='main'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/ourBuilds' element={<OurBuilds />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/legalAdvise' element={<LegalAdvise />} />
          <Route path='/privacyPolicies' element={<PrivacyPolicies />} />
          <Route path='/cookiePolicies' element={<CookiePolicies />} />
          <Route path='/cookiePreferences' element={<CookiePreferences />} />
        </Routes> 
      </main>
      
      <CookieBanner />
    </Router>
  );
}

export default App;
