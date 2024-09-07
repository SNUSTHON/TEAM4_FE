import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Upload from './pages/upload';
import Galary from './pages/galary';
import Loginpage from './components/Loginpage';

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/galary' element={<Galary />} />
      </Routes>
    </Router>
  );
}
