import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes> 
      </main>
    </Router>
  );
}

export default App;
