
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Library: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full"><span className="material-symbols-outlined">arrow_back</span></button>
            <h2 className="text-lg font-bold dark:text-white">College Library</h2>
            <div className="w-10"></div>
        </div>
        <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">search</span>
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search books, authors, ISBN..." 
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary text-sm dark:text-white"
            />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-8 pb-24">
        {/* Issued Section */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Issued Books</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">02 Active</span>
          </div>
          <div className="space-y-3">
            <IssuedBook 
                title="Algorithms Unlocked" 
                author="Thomas H. Cormen" 
                dueDate="Oct 25, 2023" 
                daysLeft={10}
                category="Computer Science"
            />
            <IssuedBook 
                title="Business Law Concepts" 
                author="S.S. Gulshan" 
                dueDate="Oct 12, 2023" 
                daysLeft={-3}
                category="Commerce"
            />
          </div>
        </section>

        {/* Categories */}
        <section>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 px-1">Browse Categories</h3>
          <div className="grid grid-cols-2 gap-4">
            <LibraryCategory icon="memory" title="Comp. Science" count="1.2k+" />
            <LibraryCategory icon="finance" title="Economics" count="800+" />
            <LibraryCategory icon="palette" title="Fine Arts" count="450+" />
            <LibraryCategory icon="science" title="Pure Science" count="2k+" />
          </div>
        </section>
      </div>
    </div>
  );
};

const IssuedBook: React.FC<{ title: string; author: string; dueDate: string; daysLeft: number; category: string }> = ({ title, author, dueDate, daysLeft, category }) => {
  const isOverdue = daysLeft < 0;

  return (
    <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border dark:border-slate-800 shadow-sm flex gap-4">
      <div className={`size-16 rounded-xl flex items-center justify-center ${isOverdue ? 'bg-red-50 text-red-500' : 'bg-primary/10 text-primary'}`}>
        <span className="material-symbols-outlined text-3xl">auto_stories</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate pr-2">{title}</h4>
            <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${isOverdue ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                {isOverdue ? 'Overdue' : category}
            </span>
        </div>
        <p className="text-xs text-slate-400 mb-3">{author}</p>
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 font-bold uppercase">Return By</span>
                <span className={`text-[11px] font-bold ${isOverdue ? 'text-red-600' : 'dark:text-white'}`}>{dueDate}</span>
            </div>
            {isOverdue && <span className="text-[10px] font-bold text-red-600">Fine: ₹{Math.abs(daysLeft * 5)}</span>}
        </div>
      </div>
    </div>
  );
};

const LibraryCategory: React.FC<{ icon: string; title: string; count: string }> = ({ icon, title, count }) => (
  <button className="bg-white dark:bg-surface-dark p-5 rounded-2xl border dark:border-slate-800 flex flex-col items-center text-center gap-2 hover:border-primary/30 transition-all active:scale-95 shadow-sm">
    <div className="size-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-primary mb-1">
        <span className="material-symbols-outlined">{icon}</span>
    </div>
    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{title}</h4>
    <p className="text-[10px] text-slate-400 font-medium">{count} Books</p>
  </button>
);

export default Library;
