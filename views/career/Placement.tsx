
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Placement: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold dark:text-white">Placement Cell</h2>
        <button className="p-2 rounded-full text-primary"><span className="material-symbols-outlined">bookmark</span></button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-6 pb-24">
        {/* Profile Readiness */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold dark:text-white">Your Readiness</h3>
            <span className="text-xs font-black text-primary">78% Complete</span>
          </div>
          <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-primary rounded-full" style={{ width: '78%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ReadinessCheck label="Resume" done />
            <ReadinessCheck label="LinkedIn" done />
            <ReadinessCheck label="Mock Test" />
          </div>
        </div>

        {/* Listings */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Open Opportunities</h3>
            <button className="text-primary text-[10px] font-black uppercase tracking-widest">Filter</button>
          </div>
          <div className="space-y-4">
            <JobCard 
                company="Tech Mahindra" 
                role="Software Engineer Trainee" 
                salary="₹4.5 - 6.0 LPA" 
                deadline="Apply by Oct 20" 
                type="Full-time"
                logoColor="bg-red-50 text-red-600"
                logo="TM"
                tags={['IT', 'Remote']}
            />
            <JobCard 
                company="HDFC Bank" 
                role="Relationship Manager" 
                salary="₹3.8 - 5.0 LPA" 
                deadline="Apply by Oct 18" 
                type="Full-time"
                logoColor="bg-blue-50 text-blue-600"
                logo="HDFC"
                tags={['Finance', 'On-site']}
            />
            <JobCard 
                company="Zoho Corp" 
                role="Product Design Intern" 
                salary="₹25k / mo" 
                deadline="Apply by Oct 25" 
                type="Internship"
                logoColor="bg-green-50 text-green-600"
                logo="Z"
                tags={['Design', 'Chennai']}
            />
          </div>
        </section>

        {/* Resources */}
        <section>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 px-1">Preparation Hub</h3>
            <div className="bg-indigo-600 rounded-2xl p-5 text-white flex items-center justify-between shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="font-bold">Aptitude Training</h4>
                    <p className="text-xs text-indigo-100 opacity-80 mt-1">Start your daily prep quiz</p>
                    <button className="mt-4 px-4 py-2 bg-white text-indigo-600 text-[10px] font-black rounded-lg uppercase tracking-wider shadow-md">Start Quiz</button>
                </div>
                <span className="material-symbols-outlined text-8xl opacity-10 absolute -right-4 -bottom-4">quiz</span>
            </div>
        </section>
      </div>
    </div>
  );
};

const ReadinessCheck: React.FC<{ label: string; done?: boolean }> = ({ label, done }) => (
  <div className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${done ? 'bg-green-50 border-green-100 dark:bg-green-900/10 dark:border-green-800' : 'bg-slate-50 border-slate-100 dark:bg-slate-900 dark:border-slate-800 opacity-60'}`}>
    <span className={`material-symbols-outlined text-[16px] ${done ? 'text-green-600' : 'text-slate-400'}`}>
        {done ? 'check_circle' : 'circle'}
    </span>
    <span className={`text-[9px] font-bold ${done ? 'text-green-800 dark:text-green-400' : 'text-slate-500'}`}>{label}</span>
  </div>
);

const JobCard: React.FC<{ company: string; role: string; salary: string; deadline: string; type: string; logoColor: string; logo: string; tags: string[] }> = ({ company, role, salary, deadline, type, logoColor, logo, tags }) => (
  <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border dark:border-slate-800 shadow-sm transition-all hover:border-primary/20 cursor-pointer group">
    <div className="flex gap-4 mb-4">
        <div className={`size-12 rounded-xl flex items-center justify-center font-black text-xs ${logoColor}`}>
            {logo}
        </div>
        <div className="flex-1 min-w-0">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{company}</h4>
            <p className="text-xs text-slate-500 mt-0.5">{role}</p>
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{type}</span>
    </div>
    
    <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(t => <span key={t} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-bold rounded-md uppercase tracking-widest">{t}</span>)}
    </div>

    <div className="flex justify-between items-center border-t dark:border-slate-800 pt-4">
        <div className="flex flex-col">
            <span className="text-[9px] text-slate-400 font-bold uppercase">Package</span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{salary}</span>
        </div>
        <span className="text-[10px] font-bold text-red-500">{deadline}</span>
    </div>
  </div>
);

export default Placement;
