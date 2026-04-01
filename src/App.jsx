import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Matches from './pages/Matches';
import Profile from './pages/Profile';
import Upgrade from './pages/Upgrade';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/matches/:tab" element={<Matches />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/upgrade/:plan" element={<Upgrade />} />
        <Route path="/search" element={<Matches />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
