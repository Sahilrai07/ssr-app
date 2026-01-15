
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../../constants';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<'student' | 'driver'>('student');

  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6 gap-8 relative overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-sm flex flex-col items-center gap-6 z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
          <div className="h-20 w-20 bg-white dark:bg-surface-dark rounded-2xl shadow-xl flex items-center justify-center border dark:border-slate-700 relative">
            <img src={ASSETS.LOGO} className="w-14 h-14 object-contain" alt="Logo" />
          </div>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">SSR ACS College</h1>
          <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Digital Campus Portal</p>
        </div>

        {/* Role Selector */}
        <div className="flex w-full p-1 bg-slate-100 dark:bg-slate-900 rounded-xl mb-2">
          <button 
            onClick={() => setUserRole('student')}
            className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${userRole === 'student' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-500'}`}
          >
            <span className="material-symbols-outlined text-sm">school</span>
            Student
          </button>
          <button 
            onClick={() => setUserRole('driver')}
            className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${userRole === 'driver' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-500'}`}
          >
            <span className="material-symbols-outlined text-sm">directions_bus</span>
            Bus Driver
          </button>
        </div>

        <div className="w-full bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border dark:border-slate-800 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                {userRole === 'student' ? 'Student ID / Email' : 'Driver ID / License'}
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
                  {userRole === 'student' ? 'person' : 'badge'}
                </span>
                <input 
                  type="text" 
                  placeholder={userRole === 'student' ? "Enter your ID" : "DRV-1029"} 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all dark:text-white text-sm"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Security PIN / Password</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                <input 
                  type="password" 
                  placeholder="•••••••••" 
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all dark:text-white text-sm"
                />
              </div>
              {userRole === 'student' && (
                <div className="flex justify-end pt-1">
                  <button onClick={() => navigate('/forgot-password')} className="text-xs font-bold text-primary">Forgot Password?</button>
                </div>
              )}
            </div>
          </div>
          <button 
            onClick={() => navigate(userRole === 'student' ? '/dashboard' : '/driver-dashboard')}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>{userRole === 'student' ? 'Student Login' : 'Driver Login'}</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {userRole === 'student' ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">New to SSR ACS College?</p>
            <button onClick={() => navigate('/register')} className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-surface-dark border dark:border-slate-700 rounded-full text-sm font-bold text-slate-700 dark:text-slate-200 shadow-sm active:scale-95 transition-all">
              <span className="material-symbols-outlined text-primary text-xl">person_add</span>
              New Student Registration
            </button>
          </div>
        ) : (
          <p className="text-center text-[10px] text-slate-400 max-w-[200px]">
            Driver access is monitored for live GPS tracking. Contact transport admin for credentials.
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
