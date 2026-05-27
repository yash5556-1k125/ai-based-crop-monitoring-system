import { useState, useRef } from 'react';
import { UploadCloud } from 'lucide-react';

export default function Dropzone({ onUpload }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onUpload(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div 
      className={`glass-panel border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-16 cursor-pointer
        ${isDragging ? 'border-primary-color bg-primary-light/10 transform scale-105' : 'border-gray-300 hover:border-primary-light'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current.click()}
    >
      <input 
        type="file" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={handleChange} 
        accept="image/*"
      />
      <div className="bg-green-50 p-6 rounded-full text-primary-color mb-6 pointer-events-none">
        <UploadCloud size={48} />
      </div>
      <h3 className="heading-sm mb-2 pointer-events-none">Drag & Drop Leaf Image Here</h3>
      <p className="text-muted text-center max-w-md pointer-events-none">
        Upload a high-resolution, clear photo of the top or bottom of the leaf. 
        Supports JPG, PNG up to 10MB.
      </p>
      
      <button className="btn-secondary mt-8 pointer-events-none">
        Browse Files
      </button>
    </div>
  );
}
