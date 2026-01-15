
import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b dark:border-slate-800 flex items-center justify-between">
        <button className="p-2 rounded-full text-slate-900 dark:text-white"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold dark:text-white">College Events</h2>
        <button className="p-2 rounded-full text-slate-900 dark:text-white"><span className="material-symbols-outlined">filter_list</span></button>
      </div>

      <div className="p-4 space-y-6">
        {/* Calendar Widget Simplified */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border dark:border-slate-800 text-center">
          <div className="flex justify-between items-center mb-6">
            <button className="p-1 rounded-full border dark:border-slate-700"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
            <p className="font-bold text-slate-900 dark:text-white">October 2023</p>
            <button className="p-1 rounded-full border dark:border-slate-700"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
          </div>
          <div className="grid grid-cols-7 gap-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <span key={d}>{d}</span>)}
            {Array.from({ length: 31 }).map((_, idx) => {
              const isSelected = idx + 1 === 15;
              const hasEvent = [4, 10, 18, 25].includes(idx + 1);
              return (
                <button 
                  key={idx}
                  className={`size-10 rounded-full flex flex-col items-center justify-center relative transition-all ${isSelected ? 'bg-primary text-white shadow-lg' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  <span className="text-sm font-medium">{idx + 1}</span>
                  {hasEvent && !isSelected && <span className="absolute bottom-1 size-1 bg-primary rounded-full"></span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Event List */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Upcoming Events</h3>
            <button className="text-primary text-sm font-bold">See All</button>
          </div>
          <div className="space-y-4">
            <EventCard date="15" month="Oct" title="Annual Cultural Fest" time="10:00 AM" location="Main Auditorium" category="Cultural" />
            <EventCard date="18" month="Oct" title="Science Exhibition" time="09:00 AM" location="Science Block, Lab 3" category="Academic" />
            <EventCard date="25" month="Oct" title="Guest Lecture: AI Ethics" time="11:00 AM" location="Conference Hall" category="Seminar" />
          </div>
        </section>

        {/* Submit Idea Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-primary to-blue-500 text-white flex items-center justify-between shadow-xl shadow-blue-500/20">
          <div>
            <p className="font-bold text-lg">Have an event idea?</p>
            <p className="text-blue-50 text-sm">Submit your proposal for review.</p>
          </div>
          <button className="size-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-lg active:scale-95">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const EventCard: React.FC<{ date: string; month: string; title: string; time: string; location: string; category: string }> = ({ date, month, title, time, location, category }) => (
  <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border dark:border-slate-800 shadow-sm flex gap-4 transition-all hover:shadow-md cursor-pointer group">
    <div className="size-16 rounded-xl bg-blue-50 dark:bg-slate-900 border dark:border-slate-800 flex flex-col items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
      <span className="text-[10px] font-extrabold uppercase tracking-widest">{month}</span>
      <span className="text-2xl font-black leading-none">{date}</span>
    </div>
    <div className="flex-1 space-y-1.5">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-slate-900 dark:text-white leading-tight pr-4">{title}</h4>
        <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase bg-purple-100 text-purple-700 whitespace-nowrap">{category}</span>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-medium">
          <span className="material-symbols-outlined text-sm">schedule</span>
          {time}
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-medium">
          <span className="material-symbols-outlined text-sm">place</span>
          {location}
        </div>
      </div>
    </div>
  </div>
);

export default Events;
