import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, CalendarDays, DollarSign } from 'lucide-react';

const data = [
  { month: 'Jan', price: 2150 },
  { month: 'Feb', price: 2200 },
  { month: 'Mar', price: 2100 },
  { month: 'Apr', price: 2350 },
  { month: 'May', price: 2400 },
  { month: 'Jun', price: 2600 },
  { month: 'Jul', price: 2550 },
];

export default function Market() {
  const [commodity, setCommodity] = useState('Wheat');

  return (
    <div className="market-container animate-fade-in max-w-5xl mx-auto mt-4">
      <div className="mb-10 text-center">
        <h2 className="heading-md mb-2">AI Market & Economic Intelligence</h2>
        <p className="text-muted">LSTM-driven price forecasting and optimal harvest timeline mapping.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LSTM AI Chart */}
        <div className="md:col-span-2 glass-panel flex flex-col min-h-[450px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="heading-sm flex items-center gap-2">
              <TrendingUp size={24} className="text-primary-color"/> {commodity} Price Forecast
            </h3>
            <select 
              value={commodity} 
              onChange={(e) => setCommodity(e.target.value)}
              className="px-3 py-1 border rounded-xl text-sm outline-none bg-white"
            >
              <option>Wheat</option>
              <option>Corn</option>
              <option>Soybeans</option>
              <option>Rice</option>
            </select>
          </div>
          
          <div className="flex-1 w-full h-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }}/>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
                <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
                <YAxis tick={{ fill: '#6b7280' }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted text-center mt-4">Predicted peak: $2,600/ton in June based on global supply chain AI models.</p>
        </div>

        {/* Harvest Window */}
        <div className="flex flex-col gap-6">
          <div className="glass-card bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white text-green-600 rounded-full shadow-sm">
                <CalendarDays size={24} />
              </div>
              <h3 className="font-bold text-gray-800">Optimal Harvest Window</h3>
            </div>
            <p className="text-3xl font-bold text-green-700 mb-2">14 Days</p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Satellite NDMI metrics suggest mature moisture levels. Combining this with next week's dry weather forecast, you should harvest between the <span className="font-bold">12th and 18th</span> to maximize shelf life.
            </p>
          </div>

          <div className="glass-card border-l-4 border-l-yellow-500">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign size={20} className="text-yellow-600"/>
              <h3 className="font-bold text-gray-800">Yield Value Estimate</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800 mt-2">$12,400</p>
            <p className="text-sm text-muted mt-1 flex items-center gap-1">
              <TrendingDown size={14} className="text-red-500"/> Hold sale until June
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
