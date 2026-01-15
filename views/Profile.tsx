
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-background-light dark:bg-background-dark">
      {/* App Bar */}
      <div className="sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">My Profile</h2>
        <button onClick={() => navigate('/notification-prefs')} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center pt-6 pb-12 px-4 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent">
        <div className="relative">
          <div className="size-32 rounded-full p-1 bg-white dark:bg-slate-800 shadow-md ring-1 ring-primary/20">
            <img src={ASSETS.AVATAR} className="w-full h-full rounded-full object-cover" alt="Avatar" />
          </div>
          <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-slate-800">
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
          </button>
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Rahul Sharma</h1>
          <p className="text-primary font-medium mt-1">B.Sc. Computer Science - Year 2</p>
          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
            <span className="size-1.5 rounded-full bg-green-500 mr-2"></span>
            ACTIVE STUDENT
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="px-4 space-y-6 -mt-4">
        <InfoCard icon="school" title="Academic Details" items={[
          { label: 'Roll Number', value: 'CS-2023-45' },
          { label: 'PRN', value: '1122334455' },
          { label: 'Semester', value: 'Semester IV' },
          { label: 'CGPA', value: '8.92' }
        ]} />

        <InfoCard icon="person" title="Personal Info" items={[
          { label: 'Email Address', value: 'rahul.s@ssr-acs.edu', icon: 'mail' },
          { label: 'Contact Number', value: '+91 98765 43210', icon: 'call' },
          { label: 'Date of Birth', value: '15 Aug 2003', icon: 'cake' }
        ]} />

        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm overflow-hidden border dark:border-slate-800">
          <ProfileAction icon="badge" label="View ID Card" onClick={() => {}} />
          <ProfileAction icon="lock_reset" label="Change Password" onClick={() => {}} border={false} />
        </div>

        <div className="pb-6">
          <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-2xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">edit</span>
            Edit Profile
          </button>
          <button onClick={() => navigate('/login')} className="w-full mt-4 text-slate-400 font-bold text-sm py-2 hover:text-red-500 transition-colors">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoCard: React.FC<{ icon: string; title: string; items: any[] }> = ({ icon, title, items }) => (
  <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border dark:border-slate-800 overflow-hidden">
    <div className="px-5 py-4 border-b dark:border-slate-800 flex items-center gap-3">
      <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
    <div className="p-5 space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-1">
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          <div className="flex items-center gap-2">
            {item.icon && <span className="material-symbols-outlined text-slate-400 text-sm">{item.icon}</span>}
            <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProfileAction: React.FC<{ icon: string; label: string; onClick: () => void; border?: boolean }> = ({ icon, label, onClick, border = true }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${border ? 'border-b dark:border-slate-800' : ''}`}
  >
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-slate-400">{icon}</span>
      <span className="font-bold text-sm text-slate-700 dark:text-slate-300">{label}</span>
    </div>
    <span className="material-symbols-outlined text-slate-300 text-sm">arrow_forward_ios</span>
  </button>
);

export default Profile;
