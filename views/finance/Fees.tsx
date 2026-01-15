
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Fees: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'current' | 'history'>('current');

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="p-4 flex items-center justify-between bg-white dark:bg-background-dark z-10 border-b dark:border-slate-800">
        <button onClick={() => navigate('/dashboard')} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Fees Overview</h2>
        <button onClick={() => navigate('/notification-prefs')} className="p-2 rounded-full text-slate-400"><span className="material-symbols-outlined">notifications</span></button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 px-4 pt-6">
        {/* Toggle */}
        <div className="bg-slate-100 dark:bg-surface-dark p-1 rounded-2xl flex mb-6">
          <button 
            onClick={() => setView('current')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${view === 'current' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500'}`}
          >
            Current Year
          </button>
          <button 
            onClick={() => setView('history')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${view === 'history' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500'}`}
          >
            History
          </button>
        </div>

        {view === 'current' ? (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-blue-400 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
              <p className="text-blue-50 text-sm font-medium mb-1">Total Outstanding</p>
              <h2 className="text-4xl font-extrabold mb-6">₹20,000</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-blue-50">
                  <span>Paid: ₹30,000</span>
                  <span>Total: ₹50,000</span>
                </div>
                <div className="h-2.5 w-full bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <section>
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">event_upcoming</span> Upcoming Deadlines
              </h3>
              <div className="bg-white dark:bg-surface-dark border dark:border-slate-700 p-4 rounded-2xl shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-[10px] font-bold rounded-full">DUE SOON</span>
                    <p className="font-bold text-slate-900 dark:text-white">2nd Installment</p>
                    <p className="text-xs text-slate-500">Due on Oct 15th, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">₹12,500</p>
                    <p className="text-xs text-slate-400">Pending</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/payment', { state: { amount: 12500, title: '2nd Installment Fee' } })}
                  className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-md transition-transform active:scale-95"
                >
                  Pay Now
                </button>
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-4">
            <TransactionCard name="Exam Fee" date="Oct 24" amount="1,200" id="#REC-89201" status="paid" />
            <TransactionCard name="Semester 3 Tuition" date="Aug 10" amount="15,000" id="#REC-81023" status="paid" />
            <TransactionCard name="Library Fine" date="Aug 10" amount="50" id="#PEN-10293" status="pending" />
          </div>
        )}
      </div>
    </div>
  );
};

const TransactionCard: React.FC<{ name: string; date: string; amount: string; id: string; status: string }> = ({ name, date, amount, id, status }) => (
  <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border dark:border-slate-800 shadow-sm flex items-center gap-4">
    <div className={`size-12 rounded-xl flex flex-col items-center justify-center text-[10px] font-bold ${status === 'paid' ? 'bg-blue-50 text-primary dark:bg-blue-900/30' : 'bg-orange-50 text-orange-600 dark:bg-orange-900/30'}`}>
      <span>{date.split(' ')[0]}</span>
      <span className="text-lg leading-none">{date.split(' ')[1]}</span>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">{name}</h4>
        <p className="font-bold text-sm text-slate-900 dark:text-white">₹{amount}</p>
      </div>
      <div className="flex justify-between items-end mt-1">
        <p className="text-[10px] text-slate-400 uppercase tracking-wide">ID: {id}</p>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{status}</span>
      </div>
    </div>
  </div>
);

export default Fees;
