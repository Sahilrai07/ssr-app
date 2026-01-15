
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 px-4 py-6 gap-6 overflow-y-auto no-scrollbar pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={ASSETS.LOGO} className="size-10 rounded-full border-2 border-primary shadow-sm" alt="Logo" />
          <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">SSR ACS College</h1>
        </div>
        <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
          <span className="absolute top-2 right-2 size-2.5 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
        </button>
      </div>

      {/* Greeting Card */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-400 p-6 text-white shadow-lg shadow-blue-500/20">
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <p className="text-blue-100 text-sm font-medium mb-1">Welcome back,</p>
            <h2 className="text-2xl font-bold tracking-tight mb-2">Priya Sharma</h2>
            <div className="flex flex-col gap-1 text-sm text-blue-50">
              <span className="opacity-90">B.Com - 2nd Year</span>
              <span className="opacity-75">2023-2024 Academic Year</span>
            </div>
          </div>
          <div className="bg-white/20 p-1 rounded-full backdrop-blur-sm">
            <img src={ASSETS.AVATAR} className="size-12 rounded-full border-2 border-white/30" alt="Avatar" />
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 size-40 rounded-full bg-white/10 blur-2xl"></div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between h-32">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">CGPA</span>
            <span className="material-symbols-outlined text-green-500 text-[20px]">trending_up</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900 dark:text-white">8.9</span>
            <p className="text-xs text-slate-400 mt-1">Last Semester: 8.5</p>
          </div>
        </div>
        <div onClick={() => navigate('/attendance')} className="bg-white cursor-pointer dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex items-center justify-between relative z-10">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Attendance</span>
            <span className="material-symbols-outlined text-primary text-[20px]">pie_chart</span>
          </div>
          <div className="relative z-10">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">85%</span>
            <p className="text-xs text-green-500 font-medium mt-1">Good Standing</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5">
            <span className="material-symbols-outlined text-9xl">check_circle</span>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section>
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 px-1">Quick Access</h3>
        <div className="grid grid-cols-3 gap-3">
          <QuickAction icon="school" label="Results" color="blue" onClick={() => navigate('/results')} />
          <QuickAction icon="description" label="Exam Forms" color="indigo" onClick={() => navigate('/exam-forms')} />
          <QuickAction icon="payments" label="Fee Payment" color="emerald" onClick={() => navigate('/fees')} />
          <QuickAction icon="directions_bus" label="Bus Tracking" color="orange" onClick={() => navigate('/bus-tracking')} />
          <QuickAction icon="campaign" label="Notices" color="pink" onClick={() => navigate('/notices')} />
          <QuickAction icon="headset_mic" label="Support" color="slate" onClick={() => navigate('/support')} />
        </div>
      </section>
    </div>
  );
};

const QuickAction: React.FC<{ icon: string; label: string; color: string; onClick: () => void }> = ({ icon, label, color, onClick }) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-50 text-primary dark:bg-blue-900/30',
    indigo: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30',
    emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30',
    orange: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30',
    pink: 'bg-pink-50 text-pink-600 dark:bg-pink-900/30',
    slate: 'bg-slate-100 text-slate-600 dark:bg-slate-700/50'
  };

  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-2 p-3 bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all active:scale-95"
    >
      <div className={`size-12 rounded-full flex items-center justify-center ${colors[color]}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 text-center leading-tight">{label}</span>
    </button>
  );
};

export default Dashboard;
