import { ShieldAlert, CheckCircle, Droplet, Bug, Box, Camera, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Results({ data }) {
  const isHealthy = data.disease === 'Healthy';

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="results-container flex flex-col gap-6"
    >
      {/* Top Status Card */}
      <div className={`glass-card border-l-4 ${isHealthy ? 'border-l-success' : 'border-l-red-500'}`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">AI Diagnosis</span>
            <h2 className="heading-sm mt-1">{data.disease}</h2>
          </div>
          <div className="bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm text-gray-700">
            {data.confidence}% Match
          </div>
        </div>
        
        <p className="text-muted leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Water Requirement */}
        <div className="glass-card">
          <div className="flex items-center gap-2 mb-3">
            <Droplet size={20} className="text-blue-500" />
            <h3 className="font-semibold">Water Needs</h3>
          </div>
          <p className="text-lg font-bold text-gray-800">{data.waterQuantity}</p>
          <p className="text-xs text-muted mt-1">{data.waterDetails}</p>
        </div>

        {/* Severity */}
        <div className="glass-card">
          <div className="flex items-center gap-2 mb-3">
            {isHealthy ? <CheckCircle size={20} className="text-success" /> : <ShieldAlert size={20} className="text-red-500" />}
            <h3 className="font-semibold">Severity Target</h3>
          </div>
          <p className="text-lg font-bold text-gray-800">{data.severity}</p>
          <div className="w-full bg-gray-200 mt-2 h-2 rounded-full overflow-hidden">
            <div 
              className={`h-full ${isHealthy ? 'bg-success' : 'bg-red-500'}`} 
              style={{ width: `${isHealthy ? 100 : data.confidence}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Advanced Prescriptions */}
      <div className="glass-card">
        <h3 className="font-semibold mb-4 border-b border-gray-100 pb-2">Treatment & Prescriptions</h3>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700 h-fit">
              <Box size={20} />
            </div>
            <div>
              <h4 className="font-medium text-sm">Fertilizer Requirement</h4>
              <p className="text-sm text-muted mt-1">{data.fertilizer}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="bg-red-100 p-2 rounded-lg text-red-700 h-fit">
              <Bug size={20} />
            </div>
            <div>
              <h4 className="font-medium text-sm">Pesticide / Fungicide</h4>
              <p className="text-sm text-muted mt-1">{data.pesticide}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced CV Metrics */}
      {data.cvMetrics && (
        <div className="glass-card bg-indigo-50/50 border-indigo-100">
          <h3 className="font-semibold mb-4 border-b border-indigo-100 pb-2 flex items-center gap-2">
            <Camera size={18} className="text-indigo-600"/> Advanced Vision Diagnostics
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-3 rounded-xl border border-indigo-50 shadow-sm">
              <p className="text-xs text-indigo-500 font-semibold mb-1 uppercase tracking-wider">Leaf Area Index</p>
              <p className="font-bold">{data.cvMetrics.lai}</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-indigo-50 shadow-sm flex flex-col justify-center">
              <p className="text-xs text-indigo-500 font-semibold mb-1 uppercase tracking-wider flex items-center gap-1"><Target size={12}/> Yield Count</p>
              <p className="font-bold">{data.cvMetrics.fruitCount} Detected visible units</p>
            </div>
          </div>
          
          <div className="bg-white p-3 rounded-xl border border-indigo-50 shadow-sm">
            <p className="text-xs text-indigo-500 font-semibold mb-1 uppercase tracking-wider">Macro-Nutrient Spectroscopy Map</p>
            <p className="text-sm font-medium text-gray-700">{data.cvMetrics.nutrientMap}</p>
          </div>
        </div>
      )}

    </motion.div>
  );
}
