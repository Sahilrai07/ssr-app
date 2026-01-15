
import React from 'react';
import { ASSETS } from '../../constants';

const Results: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
      {/* Header */}
      <div className="p-4 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md z-10">
        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Academic Results</h2>
        <div className="w-10"></div>
      </div>

      {/* Student Summary Card */}
      <div className="px-4 py-2">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#4ba3f5] p-6 text-white shadow-lg shadow-blue-500/20">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold">Rahul Sharma</h3>
                <p className="text-blue-100 text-sm">Roll No: CS-2023-45</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <span className="material-symbols-outlined">school</span>
              </div>
            </div>
            <div className="flex gap-8 border-t border-white/20 pt-4">
              <div>
                <span className="text-[10px] uppercase font-medium tracking-widest text-blue-50">Overall CGPA</span>
                <p className="text-2xl font-bold">8.9</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-medium tracking-widest text-blue-50">Course</span>
                <p className="text-lg font-bold">B.Sc. Comp Sci</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar">
        {['All Semesters', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'].map((tab, idx) => (
          <button 
            key={tab}
            className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${idx === 0 ? 'bg-primary text-white shadow-md' : 'bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-400'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Results List */}
      <div className="px-4 flex flex-col gap-4">
        <SemesterResult semester="IV" date="April 2023" sgpa={9.2} subjects={[
          { name: "Data Structures", code: "CS-401", grade: "A+" },
          { name: "Web Development", code: "CS-402", grade: "O" },
          { name: "Mathematics IV", code: "MT-405", grade: "A" }
        ]} expanded />
        <SemesterResult semester="III" date="Dec 2022" sgpa={8.5} />
        <SemesterResult semester="II" date="May 2022" sgpa={8.8} />
      </div>
    </div>
  );
};

const SemesterResult: React.FC<{ semester: string; date: string; sgpa: number; subjects?: any[]; expanded?: boolean }> = ({ semester, date, sgpa, subjects, expanded = false }) => {
  return (
    <details className="group rounded-2xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden" open={expanded}>
      <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors list-none">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] font-bold">check_circle</span>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white">Semester {semester}</h4>
            <p className="text-xs text-slate-500 font-medium">{date} • SGPA: <span className="font-bold text-slate-900 dark:text-white">{sgpa}</span></p>
          </div>
        </div>
        <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
      </summary>
      {subjects && (
        <div className="px-4 pb-4 flex flex-col gap-3">
          <div className="h-px bg-slate-100 dark:bg-slate-800 mb-1" />
          {subjects.map(s => (
            <div key={s.code} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{s.name}</p>
                <p className="text-[10px] text-slate-400">{s.code}</p>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${s.grade === 'O' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{s.grade}</span>
            </div>
          ))}
          <button className="mt-2 w-full py-3 bg-primary/10 text-primary rounded-xl text-sm font-bold flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg">download</span>
            Download Marksheet
          </button>
        </div>
      )}
    </details>
  );
};

export default Results;
