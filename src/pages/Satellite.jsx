import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { motion } from 'framer-motion';
import { Map, Droplet, Activity, Zap } from 'lucide-react';

export default function Satellite() {
  const { profile } = useContext(UserContext);

  // Mock telemetry data 
  const telemetry = {
    ndvi: 0.76, // Normalized Difference Vegetation Index
    ndmi: 0.45, // Normalized Difference Moisture Index
    topsoilMoisture: "38%",
    stressLevel: "Low"
  };

  return (
    <div className="satellite-container animate-fade-in max-w-5xl mx-auto mt-4">
      <div className="mb-10 text-center">
        <h2 className="heading-md mb-2">Satellite "Virtual" Crop Health</h2>
        <p className="text-muted">Real-time Sentinel-2 geospatial analysis for your {profile.farmSize} Acre farm in {profile.location}.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Map View */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 glass-card overflow-hidden flex flex-col relative min-h-[400px]"
        >
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow border text-sm font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span> Live Sentinel-2 Feed
          </div>
          {/* Simulated Satellite Image container */}
          <div className="w-full flex-1 bg-green-900 rounded-xl overflow-hidden relative" style={{
            background: 'linear-gradient(45deg, #064e3b 25%, #047857 25%, #047857 50%, #064e3b 50%, #064e3b 75%, #047857 75%, #047857 100%)',
            backgroundSize: '40px 40px'
          }}>
            {/* Heatmap overlay simulation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/40 via-yellow-400/20 to-red-500/30 mix-blend-overlay"></div>
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-xs font-mono backdrop-blur-sm">
              LAT: 21.1458 ° N | LNG: 79.0882 ° E
            </div>
          </div>
        </motion.div>

        {/* Telemetry Panel */}
        <div className="flex flex-col gap-4">
          
          <div className="glass-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold flex items-center gap-2"><Activity size={18} className="text-green-600"/> NDVI Score</h3>
              <span className="badge bg-green-100 text-green-800">{telemetry.ndvi}</span>
            </div>
            <p className="text-xs text-muted mb-2">Measures plant photosynthetic activity.</p>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: `${telemetry.ndvi * 100}%` }}></div>
            </div>
          </div>

          <div className="glass-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold flex items-center gap-2"><Droplet size={18} className="text-blue-500"/> NDMI Index</h3>
              <span className="badge bg-blue-100 text-blue-800">{telemetry.ndmi}</span>
            </div>
            <p className="text-xs text-muted mb-2">Canopy water stress estimation.</p>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: `${telemetry.ndmi * 100}%` }}></div>
            </div>
          </div>

          <div className="glass-card bg-gradient-to-br from-white to-orange-50">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold flex items-center gap-2"><Zap size={18} className="text-orange-500"/> Thermal Surface Moisture</h3>
            </div>
            <p className="heading-sm text-orange-600 mt-2">{telemetry.topsoilMoisture}</p>
            <p className="text-xs text-muted mt-1">Calculated via radar backscatter.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
