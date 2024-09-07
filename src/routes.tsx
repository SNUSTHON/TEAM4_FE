import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Upload from './pages/uploads';
import Galary from './pages/galary';

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/galary' element={<Galary />} />
      </Routes>
    </Router>
  );
}
