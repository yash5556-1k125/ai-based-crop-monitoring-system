import { useState } from 'react';
import { motion } from 'framer-motion';
import Dropzone from '../components/Dropzone';
import Results from '../components/Results';
import { analyzeImage } from '../utils/aiService';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Analyze() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const { profile } = useContext(UserContext);

  const handleImageUpload = async (file) => {
    setImage(URL.createObjectURL(file));
    setLoading(true);
    setResults(null);
    
    try {
      // Simulate API Call with Context
      const data = await analyzeImage(file, profile);
      setResults(data);
    } catch (error) {
      console.error("Analysis Failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setResults(null);
    setLoading(false);
  };

  return (
    <div className="analyze-container animate-fade-in max-w-5xl mx-auto mt-4">
      <div className="text-center mb-10">
        <h2 className="heading-md mb-2">Crop Leaf Analysis</h2>
        <p className="text-muted">Upload a clear photo of your crop leaf for instant AI diagnostics.</p>
      </div>

      {!image ? (
        <Dropzone onUpload={handleImageUpload} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="image-preview glass-card overflow-hidden p-2 flex flex-col"
          >
            <div className="rounded-xl overflow-hidden h-[400px] relative bg-black/5">
              <img src={image} className="w-full h-full object-cover" alt="Uploaded Leaf" />
              {loading && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-primary-light border-t-primary-dark rounded-full animate-spin"></div>
                  <h3 className="mt-4 font-semibold text-primary-dark animate-pulse">Running AI Analysis...</h3>
                </div>
              )}
            </div>
            {!loading && (
                <button onClick={handleReset} className="btn-secondary w-full mt-4 justify-center">
                  Analyze Another Image
                </button>
            )}
          </motion.div>

          <div className="results-panel">
            {loading ? (
              <div className="glass-panel h-full flex items-center justify-center">
                <p className="text-muted">Waiting for AI diagnosis...</p>
              </div>
            ) : results ? (
              <Results data={results} />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
