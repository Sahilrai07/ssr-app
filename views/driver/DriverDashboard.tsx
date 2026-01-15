
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DriverDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isJourneyStarted, setIsJourneyStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleJourneyToggle = () => {
    setIsJourneyStarted(!isJourneyStarted);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-background-dark pb-8 overflow-hidden">
      {/* Driver Header */}
      <div className="p-4 bg-white dark:bg-surface-dark border-b dark:border-slate-800 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="size-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary overflow-hidden border dark:border-slate-700">
              <span className="material-symbols-outlined text-2xl">person</span>
            </div>
            <div className="absolute -bottom-1 -right-1 size-4 bg-green-500 rounded-full border-2 border-white dark:border-surface-dark"></div>
          </div>
          <div>
            <h2 className="font-bold text-sm dark:text-white leading-tight">Sunil Patil</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Bus No. 12 • MH-04-1234</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <div className="flex flex-col items-end mr-2">
              <span className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Shift ends</span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">06:00 PM</span>
           </div>
           <button onClick={() => navigate('/login')} className="p-2.5 rounded-xl bg-red-50 dark:bg-red-900/10 text-red-500 active:scale-90 transition-all">
             <span className="material-symbols-outlined text-[22px]">logout</span>
           </button>
        </div>
      </div>

      {/* System Status Indicators */}
      <div className="flex justify-between px-6 py-2 bg-slate-100 dark:bg-slate-900/50">
        <StatusIndicator icon="satellite_alt" label="GPS" active />
        <StatusIndicator icon="sensors" label="Network" active />
        <StatusIndicator icon="battery_charging_full" label="92%" active />
      </div>

      <div className="flex-1 p-4 space-y-6 overflow-y-auto no-scrollbar">
        {/* Main Control Card */}
        <div className="relative overflow-hidden bg-white dark:bg-surface-dark p-6 rounded-[2.5rem] border dark:border-slate-800 shadow-xl">
            <div className="relative z-10 flex flex-col items-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.3em] mb-3">{currentTime}</p>
                
                <div className="relative mb-8">
                    {isJourneyStarted && (
                        <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full animate-pulse"></div>
                    )}
                    <h1 className={`text-5xl font-black transition-all duration-500 tracking-tighter ${isJourneyStarted ? 'text-green-500' : 'text-slate-200 dark:text-slate-800'}`}>
                        {isJourneyStarted ? 'JOURNEY LIVE' : 'STATIONARY'}
                    </h1>
                </div>

                <button 
                    onClick={handleJourneyToggle}
                    className={`w-full h-24 rounded-3xl flex items-center justify-center gap-4 text-white font-black text-xl shadow-2xl transition-all active:scale-[0.97] ${isJourneyStarted ? 'bg-gradient-to-br from-red-500 to-red-600 shadow-red-500/40' : 'bg-gradient-to-br from-primary to-blue-600 shadow-primary/40'}`}
                >
                    <div className={`size-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md ${isJourneyStarted ? 'animate-none' : ''}`}>
                        <span className="material-symbols-outlined text-3xl">
                            {isJourneyStarted ? 'stop_circle' : 'play_arrow'}
                        </span>
                    </div>
                    {isJourneyStarted ? 'END JOURNEY' : 'START JOURNEY'}
                </button>
            </div>
            
            {/* Visual background element */}
            <div className="absolute -right-10 -top-10 size-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Current Journey Progress */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Route Progress</h3>
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Route 04 (A)</span>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 border dark:border-slate-800 shadow-sm space-y-0">
             <JourneyStop stop="College Main Gate" time="08:00 AM" status="passed" />
             <JourneyStop stop="Station Road Junction" time="08:15 AM" status="current" />
             <JourneyStop stop="Public Hospital" time="08:30 AM" status="upcoming" />
             <JourneyStop stop="East Park Square" time="08:45 AM" status="upcoming" last />
          </div>
        </section>

        {/* Shift Timetable */}
        <section>
            <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Today's Timetable</h3>
                <span className="text-[10px] font-bold text-slate-400">3 Trips Remaining</span>
            </div>
            <div className="space-y-3">
                <TimetableItem trip="Morning Pickup" route="Route 04" time="07:30 AM - 09:30 AM" status="completed" />
                <TimetableItem trip="Staff Transport" route="Special" time="10:30 AM - 11:15 AM" status="active" />
                <TimetableItem trip="Evening Drop" route="Route 04" time="04:30 PM - 06:00 PM" status="upcoming" />
            </div>
        </section>

        {/* Emergency Response */}
        <div className="grid grid-cols-2 gap-4">
            <button className="py-5 bg-white dark:bg-surface-dark border-2 border-dashed border-orange-200 dark:border-orange-900/30 text-orange-600 rounded-3xl font-bold text-xs flex flex-col items-center justify-center gap-2 transition-all active:bg-orange-50">
                <span className="material-symbols-outlined text-3xl">report_problem</span>
                Maintenance Needed
            </button>
            <button className="py-5 bg-red-600 text-white rounded-3xl font-black text-xs flex flex-col items-center justify-center gap-2 shadow-lg shadow-red-500/30 transition-all active:scale-95 active:bg-red-700">
                <span className="material-symbols-outlined text-3xl animate-pulse">sos</span>
                EMERGENCY ALERT
            </button>
        </div>
      </div>
    </div>
  );
};

const StatusIndicator: React.FC<{ icon: string; label: string; active?: boolean }> = ({ icon, label, active }) => (
    <div className={`flex items-center gap-1.5 ${active ? 'text-green-500' : 'text-slate-400 opacity-50'}`}>
        <span className="material-symbols-outlined text-base">{icon}</span>
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </div>
);

const JourneyStop: React.FC<{ stop: string; time: string; status: 'passed' | 'current' | 'upcoming'; last?: boolean }> = ({ stop, time, status, last }) => {
    return (
        <div className="flex items-start gap-4 h-16">
            <div className="flex flex-col items-center">
                <div className={`size-4 rounded-full border-4 flex items-center justify-center z-10 ${
                    status === 'passed' ? 'bg-primary border-primary' : 
                    status === 'current' ? 'bg-white border-primary animate-pulse' : 
                    'bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700'
                }`}>
                    {status === 'passed' && <span className="material-symbols-outlined text-white text-[10px] font-black">check</span>}
                </div>
                {!last && <div className={`w-0.5 flex-1 ${status === 'passed' ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'}`}></div>}
            </div>
            <div className="flex-1 pb-4">
                <div className="flex justify-between items-center">
                    <h4 className={`text-sm font-bold ${status === 'passed' ? 'text-slate-400 line-through' : status === 'current' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}>{stop}</h4>
                    <span className="text-[10px] font-bold text-slate-400">{time}</span>
                </div>
                {status === 'current' && <p className="text-[10px] text-primary font-black uppercase tracking-tighter mt-1">Approaching Now</p>}
            </div>
        </div>
    );
};

const TimetableItem: React.FC<{ trip: string; route: string; time: string; status: 'completed' | 'active' | 'upcoming' }> = ({ trip, route, time, status }) => {
    const styles = {
        completed: 'opacity-50 grayscale',
        active: 'border-primary ring-1 ring-primary/20 bg-primary/5',
        upcoming: 'bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-800'
    };

    return (
        <div className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${styles[status]}`}>
            <div className="flex items-center gap-4">
                <div className={`size-10 rounded-xl flex items-center justify-center ${status === 'active' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-500'}`}>
                    <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{trip}</h5>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5">{time} • <span className="text-primary font-bold">{route}</span></p>
                </div>
            </div>
            {status === 'active' && <span className="size-2 bg-primary rounded-full animate-ping mr-2"></span>}
        </div>
    );
};

export default DriverDashboard;
