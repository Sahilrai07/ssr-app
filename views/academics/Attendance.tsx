
import React from 'react';

const Attendance: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800 flex items-center justify-between">
        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold dark:text-white">Attendance</h2>
        <button className="p-2 rounded-full text-primary"><span className="material-symbols-outlined">calendar_month</span></button>
      </div>

      <div className="px-4 py-6 space-y-8">
        {/* Hero Card */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border dark:border-slate-800 p-8 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full -mr-8 -mt-8 blur-2xl"></div>
          <p className="text-slate-500 font-medium mb-6">Overall Attendance</p>
          
          <div className="relative size-44 rounded-full flex items-center justify-center" style={{ background: 'conic-gradient(#137fec 85%, #e2e8f0 0)' }}>
            <div className="size-36 rounded-full bg-white dark:bg-surface-dark flex flex-col items-center justify-center shadow-inner z-10">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">85%</span>
              <span className="text-xs text-slate-400 font-bold mt-1 tracking-widest">GOOD</span>
            </div>
          </div>

          <div className="mt-8 text-center space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">You're doing great!</h3>
            <p className="text-sm text-slate-500">Keep up the good work to maintain your score.</p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Detailed Breakdown</h3>
            <button className="text-primary text-sm font-bold">View All</button>
          </div>
          <div className="space-y-3">
            <SubjectProgress name="Advanced Accounting" stats="26/30 Classes" pct={86} color="primary" trend="up" />
            <SubjectProgress name="Business Law" stats="18/25 Classes" pct={72} color="orange-500" trend="warning" />
            <SubjectProgress name="Computer Science" stats="12/24 Classes" pct={50} color="red-500" trend="down" />
          </div>
        </section>
      </div>
    </div>
  );
};

const SubjectProgress: React.FC<{ name: string; stats: string; pct: number; color: string; trend: string }> = ({ name, stats, pct, color, trend }) => (
  <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border dark:border-slate-800">
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[20px]">menu_book</span>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm">{name}</h4>
          <p className="text-[10px] text-slate-500 font-medium">{stats}</p>
        </div>
      </div>
      <div className={`px-2 py-1 rounded-md flex items-center gap-1 font-bold text-[10px] ${pct >= 75 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
        <span className="material-symbols-outlined text-xs">{trend === 'up' ? 'trending_up' : trend === 'warning' ? 'warning' : 'priority_high'}</span>
        {pct}%
      </div>
    </div>
    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${pct}%`, backgroundColor: color.includes('-') ? undefined : color }}></div>
    </div>
  </div>
);

export default Attendance;
