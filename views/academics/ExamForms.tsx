
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExamForms: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold dark:text-white">Exam Forms</h2>
        <div className="w-10"></div>
      </div>

      <div className="p-4 space-y-6">
        {/* Active Section */}
        <section>
          <h3 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-4">Active for Semester IV</h3>
          <div className="space-y-4">
            <FormCard 
              title="Main Semester Examination" 
              subtitle="Regular - April 2024" 
              dueDate="Oct 20, 2023" 
              status="Pending" 
              fee="₹1,200" 
              active 
            />
            <FormCard 
              title="Re-evaluation Form" 
              subtitle="Backlog - Dec 2023" 
              dueDate="Oct 15, 2023" 
              status="Pending" 
              fee="₹500 / subject" 
            />
          </div>
        </section>

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-5 rounded-2xl flex gap-4">
          <span className="material-symbols-outlined text-primary">info</span>
          <div>
            <p className="text-sm font-bold text-primary mb-1">Important Note</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Please ensure all previous semester fees are cleared before submitting the exam form. Late submissions will incur a fine of ₹100 per day.
            </p>
          </div>
        </div>

        {/* History Section */}
        <section>
          <h3 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-4">Past Submissions</h3>
          <div className="space-y-3 opacity-60">
            <HistoryItem title="Semester III Exam Form" date="Nov 2022" id="EF-90123" />
            <HistoryItem title="Semester II Exam Form" date="May 2022" id="EF-81029" />
          </div>
        </section>
      </div>
    </div>
  );
};

const FormCard: React.FC<{ title: string; subtitle: string; dueDate: string; status: string; fee: string; active?: boolean }> = ({ title, subtitle, dueDate, status, fee, active }) => (
  <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border dark:border-slate-800 shadow-sm transition-all hover:border-primary/30">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-xs text-slate-500 font-medium">{subtitle}</p>
      </div>
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${status === 'Pending' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
        {status}
      </span>
    </div>
    
    <div className="flex items-center gap-6 mb-5">
      <div className="space-y-0.5">
        <p className="text-[10px] text-slate-400 font-bold uppercase">Deadline</p>
        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{dueDate}</p>
      </div>
      <div className="space-y-0.5">
        <p className="text-[10px] text-slate-400 font-bold uppercase">Exam Fee</p>
        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{fee}</p>
      </div>
    </div>

    <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.98] ${active ? 'bg-primary text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
      {status === 'Pending' ? 'Apply Now' : 'View Application'}
    </button>
  </div>
);

const HistoryItem: React.FC<{ title: string; date: string; id: string }> = ({ title, date, id }) => (
  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border dark:border-slate-800">
    <div>
      <h5 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h5>
      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">{date} • ID: {id}</p>
    </div>
    <span className="material-symbols-outlined text-green-500">check_circle</span>
  </div>
);

export default ExamForms;
