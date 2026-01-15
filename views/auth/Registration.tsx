
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../../constants';

const Registration: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark p-6">
      <div className="flex items-center mb-8">
        <button onClick={() => navigate('/login')} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center font-bold text-slate-900 dark:text-white pr-6">Registration</h2>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-between w-full text-[10px] font-extrabold tracking-widest text-primary uppercase">
            <span>Step 1 of 3</span>
            <span className="text-slate-400">Personal Details</span>
          </div>
          <div className="flex w-full gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-primary shadow-glow"></div>
            <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-800"></div>
            <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-800"></div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="size-20 rounded-2xl bg-white dark:bg-surface-dark border dark:border-slate-800 shadow-xl flex items-center justify-center p-4">
            <img src={ASSETS.LOGO} className="w-full h-full object-contain" alt="Logo" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome Aboard</h1>
            <p className="text-slate-500 text-sm max-w-[280px]">Enter your basic details to create your student account.</p>
          </div>
        </div>

        <div className="space-y-5">
          <InputGroup label="Full Name" icon="person" placeholder="ex. John Doe" />
          <InputGroup label="Email Address" icon="mail" placeholder="student@example.com" type="email" />
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Mobile Number</label>
            <div className="flex gap-3">
              <select className="w-24 px-3 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm font-bold outline-none focus:ring-2 focus:ring-primary">
                <option>+91</option>
                <option>+1</option>
              </select>
              <input type="tel" placeholder="123-456-7890" className="flex-1 px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white" />
            </div>
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Next Step</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <p className="text-center text-sm text-slate-500 font-medium">
            Already have an account? <button onClick={() => navigate('/login')} className="text-primary font-bold">Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

const InputGroup: React.FC<{ label: string; icon: string; placeholder: string; type?: string }> = ({ label, icon, placeholder, type = 'text' }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{label}</label>
    <div className="relative group">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">{icon}</span>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm outline-none focus:ring-2 focus:ring-primary transition-all dark:text-white"
      />
    </div>
  </div>
);

export default Registration;
