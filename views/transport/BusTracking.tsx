
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../../constants';

const BusTracking: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState(1);

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold dark:text-white">Bus Tracking</h2>
        <button className="p-2 rounded-full text-primary">
          <span className="material-symbols-outlined">refresh</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Map Preview */}
        <div className="relative h-64 bg-slate-200 dark:bg-slate-900">
          <img src={ASSETS.MAP_PREVIEW} className="w-full h-full object-cover opacity-80" alt="Map" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none"></div>
          
          {/* Animated Bus Marker */}
          <div className="absolute top-1/2 left-1/3 animate-bounce">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/20 blur-lg rounded-full animate-ping"></div>
              <div className="size-10 bg-primary text-white rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                <span className="material-symbols-outlined">directions_bus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 -mt-12 relative z-10 space-y-6">
          {/* Live Status Card */}
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl border dark:border-slate-800 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Route 0{selectedRoute}</h3>
                <p className="text-xs text-green-500 font-bold flex items-center gap-1">
                  <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                  Currently at: Station Road
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400 font-medium">Est. Arrival</p>
              <p className="text-2xl font-black text-primary">12m</p>
            </div>
          </div>

          {/* Route Selector */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
            {[1, 2, 3, 4, 5].map(r => (
              <button 
                key={r}
                onClick={() => setSelectedRoute(r)}
                className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${selectedRoute === r ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white dark:bg-surface-dark text-slate-500 dark:text-slate-400 border dark:border-slate-800'}`}
              >
                Route {r}
              </button>
            ))}
          </div>

          {/* Stops List */}
          <section>
            <h3 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-4 px-1">Bus Stops & Schedule</h3>
            <div className="bg-white dark:bg-surface-dark rounded-2xl border dark:border-slate-800 overflow-hidden">
              <StopItem time="08:15 AM" location="Main Campus Gate" status="passed" />
              <StopItem time="08:30 AM" location="Station Road Cross" status="current" />
              <StopItem time="08:45 AM" location="Cyber City Hub" status="upcoming" />
              <StopItem time="09:00 AM" location="East Metro Pillar 24" status="upcoming" last />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const StopItem: React.FC<{ time: string; location: string; status: 'passed' | 'current' | 'upcoming'; last?: boolean }> = ({ time, location, status, last }) => (
  <div className="flex items-start gap-4 p-5 relative">
    {/* Line */}
    {!last && <div className={`absolute left-[29px] top-[45px] w-0.5 h-[calc(100%-20px)] ${status === 'passed' ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'}`}></div>}
    
    {/* Indicator */}
    <div className={`size-3 mt-1.5 rounded-full border-2 z-10 ${status === 'passed' ? 'bg-primary border-primary' : status === 'current' ? 'bg-white border-primary animate-pulse' : 'bg-white border-slate-200 dark:border-slate-700'}`}></div>
    
    <div className="flex-1">
      <div className="flex justify-between items-center mb-0.5">
        <h5 className={`text-sm font-bold ${status === 'upcoming' ? 'text-slate-400' : 'text-slate-900 dark:text-white'}`}>{location}</h5>
        <span className={`text-[10px] font-bold ${status === 'upcoming' ? 'text-slate-300' : 'text-slate-500'}`}>{time}</span>
      </div>
      <p className={`text-[10px] font-bold uppercase tracking-wider ${status === 'passed' ? 'text-primary' : status === 'current' ? 'text-green-500' : 'text-slate-300'}`}>
        {status}
      </p>
    </div>
  </div>
);

export default BusTracking;
