import { NavLink } from 'react-router-dom';
import { Leaf, Activity, BookOpen, User, Map, LineChart } from 'lucide-react';
import './Navigation.css'; // Will create specific styles or just use index.css

export default function Navigation() {
  return (
    <header className="navbar glass-panel">
      <div className="container flex items-center justify-between">
        <div className="logo flex items-center gap-2">
          <div className="logo-icon bg-success-light text-success p-2 rounded-full">
            <Leaf size={28} color="var(--primary-dark)" />
          </div>
          <h1 className="heading-sm">AgriVision AI</h1>
        </div>
        
        <nav className="nav-links flex items-center gap-6 hidden md:flex">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Activity size={18} /> Home
          </NavLink>
          <NavLink to="/satellite" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Map size={18} /> Satellite
          </NavLink>
          <NavLink to="/analyze" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Leaf size={18} /> Analyze
          </NavLink>
          <NavLink to="/market" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <LineChart size={18} /> Economics
          </NavLink>
          <NavLink to="/remedies" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <BookOpen size={18} /> Remedies
          </NavLink>
        </nav>
        
        <div className="nav-profile">
          <NavLink to="/account" className={({isActive}) => isActive ? "btn-icon bg-primary-light text-white" : "btn-icon"}>
            <User size={20} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
