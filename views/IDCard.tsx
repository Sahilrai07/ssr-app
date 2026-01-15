
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';

const IDCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-slate-100 dark:bg-background-dark p-6">
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full bg-white dark:bg-surface-dark shadow-sm">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center font-bold text-slate-900 dark:text-white pr-10">Digital ID Card</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-10">
        {/* Card Front */}
        <div className="w-full aspect-[1/1.58] max-w-[320px] rounded-3xl bg-white dark:bg-surface-dark shadow-2xl relative overflow-hidden border dark:border-slate-800 flex flex-col">
          {/* Header Section */}
          <div className="bg-primary p-6 text-white text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img src={ASSETS.LOGO} className="size-10 rounded-full border border-white/30 bg-white" alt="Logo" />
              <div className="text-left">
                <p className="text-[10px] font-bold leading-none uppercase tracking-widest opacity-80">SSR ACS College</p>
                <p className="text-sm font-black leading-tight">Student Identity</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center pt-8 pb-6 px-6">
            <div className="size-32 rounded-3xl p-1 bg-white border shadow-md mb-6 rotate-[-2deg]">
              <img src={ASSETS.AVATAR} className="w-full h-full rounded-2xl object-cover" alt="Student" />
            </div>

            <div className="text-center space-y-1 mb-6">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Rahul Sharma</h2>
              <p className="text-primary font-bold text-sm">B.Sc. Computer Science</p>
            </div>

            <div className="grid grid-cols-2 w-full gap-4 text-left border-t dark:border-slate-800 pt-6">
              <IDDetail label="Student ID" value="CS-2023-45" />
              <IDDetail label="Valid Until" value="May 2026" />
              <IDDetail label="Blood Group" value="O+ Positive" />
              <IDDetail label="D.O.B" value="15-08-2003" />
            </div>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center border-t dark:border-slate-800">
             {/* Mock QR Code */}
             <div className="size-16 bg-white p-2 rounded-lg border flex items-center justify-center opacity-80">
                <span className="material-symbols-outlined text-4xl">qr_code_2</span>
             </div>
             <p className="text-[8px] text-slate-400 font-bold mt-2 uppercase tracking-[0.2em]">Verified Academic Portal</p>
          </div>

          {/* Hologram Accent */}
          <div className="absolute top-0 right-0 size-24 bg-gradient-to-bl from-white/20 to-transparent pointer-events-none"></div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[320px]">
          <button className="w-full py-4 bg-white dark:bg-surface-dark border dark:border-slate-800 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-700 dark:text-slate-300 shadow-sm active:scale-95 transition-all">
            <span className="material-symbols-outlined">download</span>
            Download Offline Copy
          </button>
          <button className="w-full py-4 bg-primary text-white rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
            <span className="material-symbols-outlined">share</span>
            Share Verification
          </button>
        </div>
      </div>
    </div>
  );
};

const IDDetail: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{value}</p>
  </div>
);

export default IDCard;
