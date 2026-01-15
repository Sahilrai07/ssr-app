
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../../constants';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6 gap-8 relative overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-sm flex flex-col items-center gap-8 z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
          <div className="h-24 w-24 bg-white dark:bg-surface-dark rounded-2xl shadow-xl flex items-center justify-center border dark:border-slate-700 relative">
            <img src={ASSETS.LOGO} className="w-16 h-16 object-contain" alt="Logo" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome Back</h1>
          <p className="text-slate-500 text-sm max-w-[250px] mx-auto">Sign in to your student portal at SSR ACS College</p>
        </div>

        <div className="w-full bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border dark:border-slate-800 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Student ID / Email</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">person</span>
                <input 
                  type="text" 
                  placeholder="Enter your ID or Email" 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Password</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                <input 
                  type="password" 
                  placeholder="•••••••••" 
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all dark:text-white"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"><span className="material-symbols-outlined text-lg">visibility_off</span></button>
              </div>
              <div className="flex justify-end pt-1">
                <button onClick={() => navigate('/forgot-password')} className="text-xs font-bold text-primary">Forgot Password?</button>
              </div>
            </div>
          </div>
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Log In</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">New to SSR ACS College?</p>
          <button onClick={() => navigate('/register')} className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-surface-dark border dark:border-slate-700 rounded-full text-sm font-bold text-slate-700 dark:text-slate-200 shadow-sm active:scale-95 transition-all">
            <span className="material-symbols-outlined text-primary text-xl">person_add</span>
            New Student Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
