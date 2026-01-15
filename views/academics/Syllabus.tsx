
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Syllabus: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold dark:text-white">Course Syllabus</h2>
        <button className="p-2 rounded-full text-primary"><span className="material-symbols-outlined">search</span></button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-6 pb-24">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-600 to-primary text-white shadow-lg">
          <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest mb-1">Academic Year 2023-24</p>
          <h3 className="text-xl font-bold">B.Sc. Computer Science</h3>
          <p className="text-sm opacity-90 mt-1">Semester IV Curriculum</p>
          <div className="mt-6 flex justify-between items-center bg-white/10 p-3 rounded-xl backdrop-blur-md">
            <div className="text-center">
              <p className="text-[10px] font-bold opacity-70 uppercase">Subjects</p>
              <p className="text-lg font-bold">06</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <p className="text-[10px] font-bold opacity-70 uppercase">Completed</p>
              <p className="text-lg font-bold">64%</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <p className="text-[10px] font-bold opacity-70 uppercase">Credits</p>
              <p className="text-lg font-bold">22</p>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <SubjectSyllabus 
            name="Data Structures" 
            code="CS-401" 
            progress={80} 
            chapters={[
              { title: "Introduction to DS", status: "completed" },
              { title: "Stack and Queue", status: "completed" },
              { title: "Trees & Binary Trees", status: "ongoing" },
              { title: "Graph Algorithms", status: "upcoming" }
            ]}
          />
          <SubjectSyllabus 
            name="Web Technology" 
            code="CS-402" 
            progress={45} 
            chapters={[
              { title: "HTML & CSS Basics", status: "completed" },
              { title: "JavaScript & DOM", status: "ongoing" },
              { title: "PHP Backends", status: "upcoming" }
            ]}
          />
        </section>
      </div>
    </div>
  );
};

const SubjectSyllabus: React.FC<{ name: string; code: string; progress: number; chapters: any[] }> = ({ name, code, progress, chapters }) => (
  <details className="group bg-white dark:bg-surface-dark rounded-2xl border dark:border-slate-800 shadow-sm overflow-hidden">
    <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-primary">{code}</span>
            <span className="text-[10px] text-slate-400 font-bold">• {chapters.length} Units</span>
        </div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">{name}</h4>
        <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-[10px] font-bold text-slate-500">{progress}%</span>
        </div>
      </div>
      <span className="material-symbols-outlined text-slate-300 transition-transform group-open:rotate-180 ml-4">expand_more</span>
    </summary>
    <div className="px-4 pb-4 space-y-3">
        <div className="h-px bg-slate-100 dark:bg-slate-800 mb-2"></div>
        {chapters.map((ch, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                <div className={`size-6 rounded-full flex items-center justify-center ${ch.status === 'completed' ? 'bg-green-100 text-green-600' : ch.status === 'ongoing' ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-400'}`}>
                    <span className="material-symbols-outlined text-[14px] font-bold">
                        {ch.status === 'completed' ? 'check' : ch.status === 'ongoing' ? 'refresh' : 'lock'}
                    </span>
                </div>
                <span className={`text-xs font-medium flex-1 ${ch.status === 'upcoming' ? 'text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>{ch.title}</span>
                {ch.status !== 'upcoming' && <button className="material-symbols-outlined text-slate-400 text-lg">download</button>}
            </div>
        ))}
    </div>
  </details>
);

export default Syllabus;
