
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark p-6">
      <div className="flex items-center mb-12">
        <button onClick={() => navigate('/login')} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center font-bold text-slate-900 dark:text-white pr-6">Forgot Password</h2>
      </div>

      {!sent ? (
        <div className="space-y-8 animate-[fadeIn_0.3s]">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="size-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-5xl">lock_open</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Recover Password</h1>
              <p className="text-slate-500 text-sm max-w-[280px]">Enter your registered email address and we'll send you recovery instructions.</p>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
              <input 
                type="email" 
                placeholder="ex. student@ssr-acs.edu" 
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm outline-none focus:ring-2 focus:ring-primary transition-all dark:text-white"
              />
            </div>
          </div>

          <button 
            onClick={() => setSent(true)}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-2xl shadow-lg transition-transform active:scale-95"
          >
            Send Instructions
          </button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 animate-[fadeIn_0.5s]">
          <div className="size-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl font-bold">mark_email_read</span>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Check Your Email</h2>
            <p className="text-slate-500 text-sm max-w-[280px]">We've sent a password reset link to your inbox. Please follow the instructions to continue.</p>
          </div>
          <button 
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-slate-100 dark:bg-surface-dark text-slate-700 dark:text-slate-300 font-bold rounded-xl text-sm"
          >
            Back to Login
          </button>
          <p className="text-xs text-slate-400">Didn't receive anything? <button className="text-primary font-bold">Resend</button></p>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
