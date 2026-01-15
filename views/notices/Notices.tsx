
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Notices: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Exams', 'Holidays', 'Events', 'Admin'];

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md px-4 pt-4 pb-2 border-b dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold dark:text-white">Notices & Board</h2>
          <button className="p-2 rounded-full text-slate-400"><span className="material-symbols-outlined">search</span></button>
        </div>
        
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full whitespace-nowrap text-xs font-bold transition-all ${activeTab === cat ? 'bg-primary text-white shadow-md' : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border dark:border-slate-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-24">
        <NoticeCard 
          tag="URGENT" 
          tagColor="red" 
          title="Rescheduled: Semester IV Mid-Term Examination" 
          date="Posted Today, 09:30 AM" 
          content="The mid-term exams originally scheduled for Oct 12th have been moved to Oct 15th due to maintenance works in the main hall." 
        />
        <NoticeCard 
          tag="HOLIDAY" 
          tagColor="orange" 
          title="Campus Closure for Dussehra Festival" 
          date="Oct 08, 2023" 
          content="College will remain closed from Oct 22nd to Oct 25th for Dussehra. Regular classes will resume from Oct 26th." 
        />
        <NoticeCard 
          tag="ADMIN" 
          tagColor="blue" 
          title="Verification of Academic Credentials" 
          date="Oct 05, 2023" 
          content="All 2nd year students are requested to visit the admin office for PRN verification before the end of this month." 
        />
        <NoticeCard 
          tag="EVENT" 
          tagColor="purple" 
          title="Invitations: Annual Inter-College Sports Meet" 
          date="Oct 02, 2023" 
          content="Registration for the sports meet is now open in the physical education department. Last date to register is Oct 10th." 
        />
      </div>
    </div>
  );
};

const NoticeCard: React.FC<{ tag: string; tagColor: 'red' | 'orange' | 'blue' | 'purple'; title: string; date: string; content: string }> = ({ tag, tagColor, title, date, content }) => {
  const colors = {
    red: 'bg-red-50 text-red-600 border-red-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100'
  };

  return (
    <div className="bg-white dark:bg-surface-dark rounded-2xl border dark:border-slate-800 shadow-sm overflow-hidden group hover:border-primary/20 transition-all">
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className={`px-2 py-0.5 rounded-md text-[9px] font-black tracking-widest uppercase border ${colors[tagColor]}`}>
            {tag}
          </span>
          <span className="text-[10px] text-slate-400 font-bold">{date}</span>
        </div>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{content}</p>
        <div className="mt-4 flex justify-between items-center">
          <button className="text-primary text-[11px] font-bold flex items-center gap-1">
            Read Full Notice
            <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
          </button>
          <button className="p-2 text-slate-300 hover:text-slate-600"><span className="material-symbols-outlined text-lg">share</span></button>
        </div>
      </div>
    </div>
  );
};

export default Notices;
