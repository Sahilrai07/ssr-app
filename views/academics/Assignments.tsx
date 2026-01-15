
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Assignments: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Active');

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full"><span className="material-symbols-outlined">arrow_back</span></button>
            <h2 className="text-lg font-bold dark:text-white">Assignments</h2>
            <button className="p-2 rounded-full text-primary"><span className="material-symbols-outlined">add_task</span></button>
        </div>
        <div className="flex gap-2">
            {['Active', 'Pending', 'Graded'].map(tab => (
                <button 
                    key={tab} 
                    onClick={() => setFilter(tab)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${filter === tab ? 'bg-primary text-white shadow-md' : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400'}`}
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
                />
                <AssignmentItem 
                    title="Market Analysis Report" 
                    subject="Business Law" 
                    deadline="Oct 20, 2023" 
                    timeLeft="7 days left" 
                    type="Theory" 
                    priority="medium"
                />
                <AssignmentItem 
                    title="User Interface Design" 
                    subject="Web Development" 
                    deadline="Oct 25, 2023" 
                    timeLeft="12 days left" 
                    type="Design" 
                    priority="low"
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
                />
            </div>
        )}
      </div>
    </div>
  );
};

const AssignmentItem: React.FC<{ title: string; subject: string; deadline: string; timeLeft: string; type: string; priority: 'high' | 'medium' | 'low'; completed?: boolean }> = ({ title, subject, deadline, timeLeft, type, priority, completed }) => {
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
      
      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">{title}</h4>
      
      <div className="flex items-center justify-between border-t dark:border-slate-800 pt-4">
        <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Deadline</span>
            <span className="text-xs font-bold dark:text-white">{deadline}</span>
        </div>
        <div className="text-right flex flex-col items-end">
            <span className={`text-[10px] font-bold uppercase ${priorityColors[priority]}`}>{timeLeft}</span>
            <button className="mt-2 flex items-center gap-1 text-[11px] font-bold text-primary group">
                {completed ? 'View Submission' : 'Upload Now'}
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
