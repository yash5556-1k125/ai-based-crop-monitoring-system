import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { MapPin, Maximize, Save } from 'lucide-react';
import { motion } from 'framer-motion';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Central India", "North India", "South India"
];

export default function Account() {
  const { profile, setProfile } = useContext(UserContext);
  const [formData, setFormData] = useState({ ...profile });
  const [justSaved, setJustSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  return (
    <div className="account-container animate-fade-in max-w-2xl mx-auto mt-4">
      <div className="mb-10 border-b pb-6 border-gray-200">
        <h2 className="heading-md mb-2">Farm Profile Settings</h2>
        <p className="text-muted">Set your location in India and farm statistics so AI can tailor fertilizer and pesticide recommendations dynamically.</p>
      </div>

      <motion.form 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onSubmit={handleSubmit} 
        className="glass-panel"
      >
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <MapPin size={18} className="text-primary-dark"/> Custom Location (State/Region)
          </label>
          <select 
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-light"
          >
            {INDIAN_STATES.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <Maximize size={18} className="text-primary-dark"/> Total Farm Area
          </label>
          <div className="flex gap-4 items-center">
            <input 
              type="number" 
              min="0.1" 
              step="0.1" 
              value={formData.farmSize}
              onChange={(e) => setFormData({...formData, farmSize: parseFloat(e.target.value) || 0})}
              className="flex-1 p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
            <span className="font-semibold text-gray-500 w-24">Acres</span>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full justify-center">
          <Save size={18} />
          {justSaved ? "Saved Successfully!" : "Save Profile"}
        </button>
      </motion.form>
    </div>
  );
}
