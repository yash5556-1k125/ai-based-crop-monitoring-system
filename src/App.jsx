import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import Remedies from './pages/Remedies';
import Account from './pages/Account';
import Satellite from './pages/Satellite';
import Market from './pages/Market';
import FarmChat from './components/FarmChat';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
      <div className="app-container">
        <Navigation />
        <main className="container p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/satellite" element={<Satellite />} />
            <Route path="/remedies" element={<Remedies />} />
            <Route path="/market" element={<Market />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <FarmChat />
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
