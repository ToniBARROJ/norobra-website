import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { OurBuilds } from './pages/OurBuilds';
import { Contact } from './pages/Contact'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ScrollToTop } from './components/ScrollToTop';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/ourBuilds' element={<OurBuilds />} />
          <Route path='/contact' element={<Contact />} />
        </Routes> 
      </main>
    </Router>
  );
}

export default App;
