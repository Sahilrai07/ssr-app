
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationPrefs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold dark:text-white">Preferences</h2>
        <div className="w-10"></div>
      </div>

      <div className="p-4 space-y-6 overflow-y-auto no-scrollbar">
        {/* Master Pause Card */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border dark:border-slate-800 p-5 flex items-center justify-between transition-all hover:border-primary/30 group">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">notifications_paused</span>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Pause All</p>
              <p className="text-[10px] text-slate-500 font-medium">Temporarily disable for 24h</p>
            </div>
          </div>
          <Switch />
        </div>

        {/* Sections */}
        <Section title="Academics">
          <ToggleItem icon="assignment" label="Exam Alerts" desc="Schedules, Hall tickets" active />
          <ToggleItem icon="bar_chart" label="Results Declared" desc="Instant result notifications" active />
          <ToggleItem icon="event_note" label="Deadlines" desc="Assignments & Projects" />
        </Section>

        <Section title="Campus Updates">
          <ToggleItem icon="campaign" label="Announcements" desc="Holidays, Events, News" active />
          <ToggleItem icon="local_library" label="Library" desc="Due dates & availability" active />
        </Section>

        <div className="text-center px-4 pt-4">
          <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
            Manage system-level permission in device settings. <br/> Some alerts like Emergency notifications cannot be disabled.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white px-1 uppercase tracking-widest">{title}</h3>
    <div className="bg-white dark:bg-surface-dark rounded-2xl border dark:border-slate-800 shadow-sm divide-y dark:divide-slate-800 overflow-hidden">
      {children}
    </div>
  </div>
);

const ToggleItem: React.FC<{ icon: string; label: string; desc: string; active?: boolean }> = ({ icon, label, desc, active = false }) => (
  <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
    <div className="flex items-center gap-4">
      <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900 dark:text-white">{label}</p>
        <p className="text-[10px] text-slate-500 font-medium">{desc}</p>
      </div>
    </div>
    <Switch active={active} />
  </div>
);

const Switch: React.FC<{ active?: boolean }> = ({ active = false }) => (
  <div className={`w-12 h-6 rounded-full relative p-1 cursor-pointer transition-all ${active ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}>
    <div className={`size-4 bg-white rounded-full shadow-sm transition-all ${active ? 'translate-x-6' : 'translate-x-0'}`}></div>
  </div>
);

export default NotificationPrefs;
