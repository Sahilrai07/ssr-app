
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Assignments: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Active');

  const tabs = ['Active', 'Pending', 'Graded', 'Materials'];

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-lg font-bold dark:text-white">Assignments</h2>
            <button className="p-2 rounded-full text-primary hover:bg-primary/10">
                <span className="material-symbols-outlined">filter_list</span>
            </button>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {tabs.map(tab => (
                <button 
                    key={tab} 
                    onClick={() => setFilter(tab)}
                    className={`px-6 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${filter === tab ? 'bg-primary text-white shadow-md' : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border dark:border-slate-800'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-24">
        {filter === 'Active' && (
            <>
                <AssignmentItem 
                    title="Implementation of AVL Trees" 
                    subject="Data Structures" 
                    deadline="Oct 15, 2023" 
                    timeLeft="2 days left" 
                    type="Programming" 
                    priority="high"
                    professor="Dr. Arvinder Singh"
                />
                <AssignmentItem 
                    title="Market Analysis Report" 
                    subject="Business Law" 
                    deadline="Oct 20, 2023" 
                    timeLeft="7 days left" 
                    type="Theory" 
                    priority="medium"
                    professor="Prof. Neha Gupta"
                />
                <AssignmentItem 
                    title="User Interface Design" 
                    subject="Web Development" 
                    deadline="Oct 25, 2023" 
                    timeLeft="12 days left" 
                    type="Design" 
                    priority="low"
                    professor="Mr. Rajesh Kumar"
                />
            </>
        )}
        
        {filter === 'Graded' && (
            <div className="opacity-70 grayscale">
                <AssignmentItem 
                    title="Basic HTML Lab" 
                    subject="Web Development" 
                    deadline="Completed" 
                    timeLeft="Grade: A+" 
                    type="Lab" 
                    priority="low"
                    completed
                    professor="Mr. Rajesh Kumar"
                />
            </div>
        )}

        {filter === 'Materials' && (
            <div className="space-y-4 animate-[fadeIn_0.3s]">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl flex items-start gap-3 border border-blue-100 dark:border-blue-800 mb-2">
                    <span className="material-symbols-outlined text-primary">folder_shared</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        These resources are posted directly by your faculty members. You can download the PDFs or view them online.
                    </p>
                </div>
                
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Recently Shared</h3>
                
                <MaterialItem 
                    title="DS Lab Manual - Unit 4" 
                    faculty="Dr. Arvinder Singh" 
                    date="2h ago" 
                    type="pdf" 
                    size="2.4 MB"
                    isNew
                />
                <MaterialItem 
                    title="Business Ethics Case Study" 
                    faculty="Prof. Neha Gupta" 
                    date="Yesterday" 
                    type="doc" 
                    size="840 KB"
                />
                <MaterialItem 
                    title="Web Tech Lecture Slides" 
                    faculty="Mr. Rajesh Kumar" 
                    date="Oct 05" 
                    type="ppt" 
                    size="12.1 MB"
                />
                <MaterialItem 
                    title="Assignment-3 Template" 
                    faculty="Dr. Arvinder Singh" 
                    date="Oct 04" 
                    type="pdf" 
                    size="150 KB"
                />
            </div>
        )}

        {filter === 'Pending' && (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                <span className="material-symbols-outlined text-6xl mb-4">check_circle</span>
                <p className="font-bold">All caught up!</p>
                <p className="text-xs">You have no pending submissions.</p>
            </div>
        )}
      </div>
    </div>
  );
};

const AssignmentItem: React.FC<{ title: string; subject: string; deadline: string; timeLeft: string; type: string; priority: 'high' | 'medium' | 'low'; completed?: boolean; professor: string }> = ({ title, subject, deadline, timeLeft, type, priority, completed, professor }) => {
  const priorityColors = {
    high: 'text-red-500',
    medium: 'text-orange-500',
    low: 'text-blue-500'
  };

  return (
    <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border dark:border-slate-800 shadow-sm transition-all hover:border-primary/20">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
            <span className={`size-2 rounded-full ${completed ? 'bg-green-500' : priority === 'high' ? 'bg-red-500' : 'bg-primary animate-pulse'}`}></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{subject}</span>
        </div>
        <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">{type}</span>
      </div>
      
      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
      <div className="flex items-center gap-2 mb-4">
          <div className="size-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500">
              {professor.split(' ').pop()?.charAt(0)}
          </div>
          <p className="text-[10px] font-medium text-slate-500">Assigned by <span className="font-bold text-slate-700 dark:text-slate-300">{professor}</span></p>
      </div>
      
      <div className="flex items-center justify-between border-t dark:border-slate-800 pt-4">
        <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Deadline</span>
            <span className="text-xs font-bold dark:text-white">{deadline}</span>
        </div>
        <div className="text-right flex flex-col items-end">
            <span className={`text-[10px] font-bold uppercase ${priorityColors[priority]}`}>{timeLeft}</span>
            <div className="flex items-center gap-3 mt-2">
                <button className="text-[10px] font-bold text-slate-400 hover:text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">download</span>
                    Brief
                </button>
                <button className="flex items-center gap-1 text-[11px] font-bold text-primary group">
                    {completed ? 'View Submission' : 'Upload Now'}
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

const MaterialItem: React.FC<{ title: string; faculty: string; date: string; type: 'pdf' | 'doc' | 'ppt'; size: string; isNew?: boolean }> = ({ title, faculty, date, type, size, isNew }) => {
  const typeIcons = {
    pdf: { icon: 'picture_as_pdf', color: 'text-red-500 bg-red-50 dark:bg-red-900/20' },
    doc: { icon: 'description', color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' },
    ppt: { icon: 'present_to_all', color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' }
  };

  const { icon, color } = typeIcons[type];

  return (
    <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:border-primary/30 transition-all cursor-pointer">
      <div className={`size-12 rounded-xl flex items-center justify-center ${color}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate pr-1">{title}</h4>
            {isNew && <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>}
        </div>
        <div className="flex items-center gap-2">
            <p className="text-[10px] font-medium text-slate-500">By {faculty}</p>
            <span className="text-[10px] text-slate-300">•</span>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tighter">{size}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
          <span className="text-[9px] font-bold text-slate-400">{date}</span>
          <button className="size-8 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">download</span>
          </button>
      </div>
    </div>
  );
};

export default Assignments;
