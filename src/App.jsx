import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopThree from './pages/TopThree';
import FullscreenTimer from './pages/FullscreenTimer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<TopThree />} />
        <Route path="/timer" element={<FullscreenTimer />} />
      </Routes>
    </BrowserRouter>
  );
}
