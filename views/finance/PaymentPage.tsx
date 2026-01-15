
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const paymentData = location.state || { amount: 0, title: 'Fee Payment' };

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white dark:bg-background-dark animate-[fadeIn_0.5s]">
        <div className="size-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-6xl">check_circle</span>
        </div>
        <h1 className="text-2xl font-bold mb-2 dark:text-white">Payment Successful</h1>
        <p className="text-slate-500 text-center mb-8">Your transaction for {paymentData.title} was processed successfully. Receipt #TXN-902183 sent to your email.</p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full bg-primary text-white font-bold h-14 rounded-2xl shadow-lg"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      <div className="p-4 flex items-center bg-white dark:bg-surface-dark border-b dark:border-slate-800">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full"><span className="material-symbols-outlined">close</span></button>
        <h2 className="flex-1 text-center font-bold dark:text-white pr-10">Checkout</h2>
      </div>

      <div className="p-6 space-y-8">
        <div className="text-center">
          <p className="text-sm text-slate-500 uppercase font-bold tracking-widest mb-1">Paying Amount</p>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white">₹{paymentData.amount.toLocaleString()}</h1>
          <p className="text-xs text-primary font-bold mt-2">{paymentData.title}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-500 uppercase px-1">Select Payment Method</h3>
          <PaymentOption icon="account_balance_wallet" title="UPI Apps" desc="Google Pay, PhonePe, Paytm" active />
          <PaymentOption icon="credit_card" title="Credit / Debit Cards" desc="Visa, Mastercard, RuPay" />
          <PaymentOption icon="account_balance" title="Net Banking" desc="All major Indian banks" />
        </div>

        <div className="p-4 bg-white dark:bg-surface-dark rounded-2xl border dark:border-slate-800 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Base Amount</span>
            <span className="font-bold dark:text-white">₹{paymentData.amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Processing Fee</span>
            <span className="text-green-500 font-bold">FREE</span>
          </div>
          <div className="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
          <div className="flex justify-between text-lg font-bold">
            <span className="dark:text-white">Total</span>
            <span className="text-primary">₹{paymentData.amount.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="mt-auto p-6">
        <button 
          onClick={handlePay}
          disabled={loading}
          className="w-full bg-slate-900 dark:bg-primary text-white font-bold h-16 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? (
            <span className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <>
              <span className="material-symbols-outlined">lock</span>
              <span>Pay Securely</span>
            </>
          )}
        </button>
        <p className="text-[10px] text-center text-slate-400 mt-4">PCI DSS Compliant • 256-bit SSL Encryption</p>
      </div>
    </div>
  );
};

const PaymentOption: React.FC<{ icon: string; title: string; desc: string; active?: boolean }> = ({ icon, title, desc, active }) => (
  <button className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${active ? 'bg-primary/5 border-primary' : 'bg-white dark:bg-surface-dark border-slate-100 dark:border-slate-800'}`}>
    <div className={`size-12 rounded-xl flex items-center justify-center ${active ? 'bg-primary text-white' : 'bg-slate-50 dark:bg-slate-900 text-slate-500'}`}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div className="flex-1 text-left">
      <p className="font-bold text-slate-900 dark:text-white">{title}</p>
      <p className="text-[10px] text-slate-500">{desc}</p>
    </div>
    <div className={`size-5 rounded-full border-2 flex items-center justify-center ${active ? 'border-primary' : 'border-slate-200 dark:border-slate-700'}`}>
      {active && <div className="size-2.5 bg-primary rounded-full"></div>}
    </div>
  </button>
);

export default PaymentPage;
