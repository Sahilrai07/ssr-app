
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../../constants';

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/dashboard');
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
    else navigate('/login');
  };

  const stepTitles = ["Personal Details", "Academic Info", "Account Setup"];

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark p-6">
      <div className="flex items-center mb-8">
        <button onClick={prevStep} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center font-bold text-slate-900 dark:text-white pr-6">Registration</h2>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-between w-full text-[10px] font-extrabold tracking-widest text-primary uppercase">
            <span>Step {step} of 3</span>
            <span className="text-slate-400">{stepTitles[step - 1]}</span>
          </div>
          <div className="flex w-full gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6 animate-[slideInRight_0.3s]">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold dark:text-white">Basic Info</h1>
              <p className="text-sm text-slate-500">Let's get started with your name and contact.</p>
            </div>
            <InputGroup label="Full Name" icon="person" placeholder="ex. Rahul Sharma" />
            <InputGroup label="Email Address" icon="mail" placeholder="rahul@example.com" type="email" />
            <InputGroup label="Phone Number" icon="call" placeholder="+91 9876543210" type="tel" />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-[slideInRight_0.3s]">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold dark:text-white">Academic Details</h1>
              <p className="text-sm text-slate-500">Tell us what you are studying.</p>
            </div>
            <InputGroup label="Roll Number" icon="badge" placeholder="ex. CS-2023-45" />
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Department</label>
              <select className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white">
                <option>Computer Science</option>
                <option>Commerce</option>
                <option>Arts</option>
                <option>Basic Science</option>
              </select>
            </div>
            <InputGroup label="Admission Year" icon="calendar_today" placeholder="2023" />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-[slideInRight_0.3s]">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold dark:text-white">Secure Account</h1>
              <p className="text-sm text-slate-500">Create a password for your portal access.</p>
            </div>
            <InputGroup label="Create Password" icon="lock" placeholder="•••••••••" type="password" />
            <InputGroup label="Confirm Password" icon="lock_clock" placeholder="•••••••••" type="password" />
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified_user</span>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
                By clicking "Complete Registration", you agree to the college's terms of service and academic policies.
              </p>
            </div>
          </div>
        )}

        <div className="pt-4 space-y-4">
          <button 
            onClick={nextStep}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>{step === 3 ? 'Complete Registration' : 'Next Step'}</span>
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
        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm outline-none focus:ring-2 focus:ring-primary transition-all dark:text-white"
      />
    </div>
  </div>
);

export default Registration;
