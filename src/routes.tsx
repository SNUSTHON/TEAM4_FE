import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Upload from './pages/upload';
import Gallary from './pages/gallary';
import Loginpage from './components/Loginpage';
import VideoCreationScreen from './components/VideoCreationScreen';

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/gallary/:id' element={<Gallary />} />
        <Route path='/create' element={<VideoCreationScreen />} />
      </Routes>
    </Router>
  );
}
