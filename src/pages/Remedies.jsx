import { Bug, Droplet, Sun, Pill } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Remedies() {
  const { profile } = useContext(UserContext);

  const guidelines = [
    {
      title: "Urea (Nitrogen) Application",
      category: "Fertilizer",
      icon: <Pill size={24} className="text-blue-500" />,
      description: `Apply ${40 * profile.farmSize}kg total for your ${profile.farmSize} acres. Current soil sensors in ${profile.location} show nitrogen deficiency.`
    },
    {
      title: "Copper Fungicide",
      category: "Pesticide",
      icon: <Bug size={24} className="text-red-500" />,
      description: `Preventative measure against Early Blight. Apply ${2 * profile.farmSize}kg total before monsoon, focusing on lower leaves.`
    },
    {
      title: "Drip Irrigation Setup",
      category: "Water",
      icon: <Droplet size={24} className="text-blue-400" />,
      description: "Recommended 2 hours of drip irrigation daily. High temperatures expected in your area this week."
    }
  ];

  return (
    <div className="remedies-container animate-fade-in max-w-4xl mx-auto mt-4">
      <div className="mb-10 border-b pb-6 border-gray-200">
        <h2 className="heading-md mb-2">{profile.location} - Area Guidelines</h2>
        <p className="text-muted">General recommendations scaled for your {profile.farmSize} Acre farm based on average regional conditions.</p>
      </div>

      <div className="grid gap-6">
        {guidelines.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card flex gap-6 items-start"
          >
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              {item.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-primary-dark uppercase tracking-wider">{item.category}</span>
              <h3 className="heading-sm mt-1 mb-2">{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
