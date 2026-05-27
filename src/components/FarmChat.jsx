import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FarmChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [history, setHistory] = useState([
    { sender: 'bot', text: 'Hello! I am your Generative AI Farm Manager. Based on dropping satellite moisture levels and your local forecast, I recommend increasing manual watering by 20% tomorrow morning. How else can I assist?' }
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!msg.trim()) return;

    // Add user message
    setHistory(prev => [...prev, { sender: 'user', text: msg }]);
    const currentMsg = msg;
    setMsg('');

    // Simulate RAG LLM Response delay
    setTimeout(() => {
      let botReply = "I've analyzed the current metrics. Everything looks stable.";
      if (currentMsg.toLowerCase().includes("harvest") || currentMsg.toLowerCase().includes("when to cut")) {
        botReply = "Cross-referencing satellite maturity maps with the 14-day weather forecast, your optimal harvest window begins next Tuesday to avoid impending heavy rains.";
      } else if (currentMsg.toLowerCase().includes("pest") || currentMsg.toLowerCase().includes("bugs")) {
        botReply = "Temperature and humidity models via XGBoost show a 78% probability of Aphid migration in your area within 48 hours. I recommend deploying preventative Neem oil.";
      }
      
      setHistory(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 1500);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-700 transition-transform hover:scale-110 z-50"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <h3 className="font-semibold">AI Farm Manager</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-green-500 p-1 rounded">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {history.map((chat, i) => (
                <div key={i} className={`flex gap-3 ${chat.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${chat.sender === 'user' ? 'bg-primary-dark text-white' : 'bg-green-200 text-green-800'}`}>
                    {chat.sender === 'user' ? <UserIcon size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm shadow-sm ${chat.sender === 'user' ? 'bg-primary-color text-white rounded-tr-none' : 'bg-white border rounded-tl-none'}`}>
                    {chat.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t flex gap-2">
              <input 
                type="text" 
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Ask about crops, pests, or harvest..." 
                className="flex-1 p-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button type="submit" className="bg-green-600 text-white p-2 rounded-xl hover:bg-green-700">
                <Send size={18} />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
