
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const screens = [
    {
      title: "SSR ACS College",
      subtitle: "Empowering Minds in Arts, Commerce & Science",
      image: ASSETS.LOGO,
      type: 'splash'
    },
    {
      title: "Real-Time Tracking",
      subtitle: "Never miss your stop again. View live locations of all college buses and estimate arrival time.",
      image: ASSETS.BUS_ILLUSTRATION,
      type: 'content'
    },
    {
      title: "Track Your Success",
      subtitle: "Access your semester results instantly. Monitor your academic progress and download marksheets.",
      image: ASSETS.TRACKING_IMAGE,
      type: 'content'
    }
  ];

  const handleNext = () => {
    if (step < screens.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/login');
    }
  };

  const current = screens[step];

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark items-center justify-center p-8 text-center animate-[fadeIn_0.5s]">
      {current.type === 'splash' ? (
        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full"></div>
            <img src={current.image} className="h-32 w-32 relative rounded-3xl" alt="Logo" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{current.title}</h1>
            <p className="text-slate-500 max-w-[280px]">{current.subtitle}</p>
          </div>
          <div className="mt-8 w-32 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-primary rounded-full animate-[progress_2s_infinite]"></div>
          </div>
          <button onClick={handleNext} className="mt-12 text-primary font-bold">Get Started</button>
        </div>
      ) : (
        <div className="w-full max-w-sm flex flex-col h-full justify-between pb-8">
          <div className="flex-1 flex flex-col items-center justify-center gap-12">
            <img src={current.image} className="w-full aspect-[4/3] object-contain drop-shadow-2xl" alt="Illustration" />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{current.title}</h2>
              <p className="text-slate-500 leading-relaxed">{current.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center gap-2">
              {[1, 2].map((i) => (
                <div key={i} className={`h-2 rounded-full transition-all ${step === i ? 'w-8 bg-primary' : 'w-2 bg-slate-200 dark:bg-slate-700'}`} />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-2xl shadow-lg transition-transform active:scale-95"
            >
              Continue
            </button>
            <button onClick={() => navigate('/login')} className="text-slate-400 text-sm font-bold">Skip</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
