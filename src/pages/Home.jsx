import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplet, Sun, Wind, ShieldAlert, ThermometerSun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Home() {
  const { profile } = useContext(UserContext);

  return (
    <div className="home-container animate-fade-in">
      
      {/* Hero Section */}
      <section className="hero py-10 flex flex-col items-center justify-center text-center mt-8">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge bg-success-light text-success mb-4 text-sm px-4 py-1">AI-Powered Farming Assistant</span>
          <h1 className="heading-lg mb-6">Smarter Crop Monitoring<br/>For Higher Yields</h1>
          <p className="text-muted max-w-2xl mx-auto mb-8 text-lg">
            Upload leaf images to instantly detect diseases, get area-specific fertilizer 
            recommendations, and calculate exact water quantities.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/analyze" className="btn-primary">
              <Leaf size={20}/>
              Start Analysis <ArrowRight size={18} />
            </Link>
            <Link to="/remedies" className="btn-secondary">
              View Guidelines
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Hyper-Local Weather & Pest Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Micro-Climate Model */}
        <div className="glass-card flex items-start gap-4">
          <div className="p-4 bg-orange-100 text-orange-600 rounded-2xl">
            <ThermometerSun size={32} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge bg-orange-100 text-orange-800 text-[10px] px-2 py-0">ECMWF / GFS Downscaling</span>
            </div>
            <h3 className="heading-sm text-gray-800">Hyper-Local Microclimate</h3>
            <p className="text-sm text-muted mt-2">
              Neural network topographic analysis for <span className="font-bold">{profile.location}</span> predicts a 34°C peak localized over your {profile.farmSize} acre canopy today. High transpiration risk.
            </p>
          </div>
        </div>

        {/* Pest Outbreak Prediction */}
        <div className="glass-card flex items-start gap-4 border-l-4 border-l-red-500">
          <div className="p-4 bg-red-100 text-red-600 rounded-2xl">
            <ShieldAlert size={32} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge bg-red-100 text-red-800 text-[10px] px-2 py-0">XGBoost AI Model</span>
            </div>
            <h3 className="heading-sm text-gray-800">Pest Migration Alert</h3>
            <p className="text-sm text-muted mt-2">
              Humidity forecast models project a <span className="font-bold text-red-600">78% probability</span> of aphid migration into your grid within the next 48 hours. Preventive spraying recommended.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
