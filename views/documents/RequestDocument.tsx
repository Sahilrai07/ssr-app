
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DocumentType {
  id: string;
  name: string;
  category: string;
  fee: number;
  processingTime: string;
  description: string;
}

const DOCUMENT_CATALOG: DocumentType[] = [
  { id: 'bonafide', name: 'Bonafide Certificate', category: 'Certificates', fee: 50, processingTime: '1-2 Days', description: 'Used for bank accounts, bus pass, or passport application.' },
  { id: 'lc', name: 'Leaving Certificate (LC)', category: 'Official', fee: 200, processingTime: '3-5 Days', description: 'Original document issued upon course completion or withdrawal.' },
  { id: 'gap', name: 'Gap Certificate', category: 'Official', fee: 100, processingTime: '2 Days', description: 'Required if there was a gap in your academic years.' },
  { id: 'char', name: 'Character Certificate', category: 'Certificates', fee: 50, processingTime: '2 Days', description: 'Issued by the principal regarding conduct and behavior.' },
  { id: 'noc', name: 'No Objection Certificate (NOC)', category: 'Official', fee: 50, processingTime: '2 Days', description: 'For changing college or participating in external events.' },
  { id: 'fee_str', name: 'Fee Structure', category: 'Finance', fee: 0, processingTime: 'Same Day', description: 'Detailed breakdown of fees for the current academic year.' },
];

const RequestDocument: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'catalog' | 'requests'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<DocumentType | null>(null);
  const [reason, setReason] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredCatalog = DOCUMENT_CATALOG.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRequest = (doc: DocumentType) => {
    setSelectedDoc(doc);
  };

  const submitRequest = () => {
    // Simulated submission
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedDoc(null);
      setReason('');
      setActiveTab('requests');
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md px-4 pt-4 pb-2 border-b dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate('/dashboard')} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold dark:text-white">Request Documents</h2>
          <button className="p-2 rounded-full text-primary">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
          <button 
            onClick={() => setActiveTab('catalog')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'catalog' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-500'}`}
          >
            Catalog
          </button>
          <button 
            onClick={() => setActiveTab('requests')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'requests' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-500'}`}
          >
            My Requests
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-24">
        {activeTab === 'catalog' ? (
          <>
            {/* Search */}
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl">search</span>
              <input 
                type="text"
                placeholder="Search document name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-surface-dark border dark:border-slate-800 shadow-sm focus:ring-2 focus:ring-primary outline-none dark:text-white text-sm"
              />
            </div>

            {/* Catalog Grid */}
            <div className="grid gap-4">
              {filteredCatalog.map(doc => (
                <div key={doc.id} className="bg-white dark:bg-surface-dark p-4 rounded-2xl border dark:border-slate-800 shadow-sm flex flex-col gap-3 group hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-primary text-[9px] font-black uppercase tracking-widest rounded mb-2 inline-block">
                        {doc.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{doc.name}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-slate-900 dark:text-white">{doc.fee === 0 ? 'FREE' : `₹${doc.fee}`}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{doc.processingTime}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {doc.description}
                  </p>
                  <button 
                    onClick={() => handleRequest(doc)}
                    className="w-full mt-2 py-3 bg-slate-50 dark:bg-slate-900 text-primary hover:bg-primary hover:text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2"
                  >
                    Request This
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <RequestHistoryItem 
              name="Bonafide Certificate" 
              date="Oct 10, 2023" 
              status="Pending" 
              id="#REQ-9012" 
            />
            <RequestHistoryItem 
              name="Fee Structure" 
              date="Sep 28, 2023" 
              status="Approved" 
              id="#REQ-8890" 
            />
            <RequestHistoryItem 
              name="Leaving Certificate" 
              date="Jun 15, 2023" 
              status="Ready" 
              id="#REQ-7721" 
            />
          </div>
        )}
      </div>

      {/* Modal / Request Form */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm p-4 animate-[fadeIn_0.2s]">
          <div className="w-full max-w-sm bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-2xl animate-[slideInUp_0.3s]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold dark:text-white">Submit Request</h3>
              <button onClick={() => setSelectedDoc(null)} className="p-2 text-slate-400">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {showSuccess ? (
              <div className="py-8 flex flex-col items-center text-center gap-4 animate-[scaleUp_0.3s]">
                <div className="size-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Request Sent!</h4>
                  <p className="text-sm text-slate-500">Track status in 'My Requests' tab.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border dark:border-slate-800">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Document Type</p>
                  <p className="text-base font-bold dark:text-white">{selectedDoc.name}</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Reason for Request</label>
                  <textarea 
                    rows={3}
                    placeholder="e.g., Required for Internship application..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark outline-none focus:ring-2 focus:ring-primary dark:text-white text-sm"
                  />
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedDoc(null)}
                    className="flex-1 py-4 text-slate-500 font-bold text-sm"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={submitRequest}
                    disabled={!reason.trim()}
                    className="flex-[2] bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-all disabled:opacity-50"
                  >
                    Confirm & Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const RequestHistoryItem: React.FC<{ name: string; date: string; status: string; id: string }> = ({ name, date, status, id }) => {
  const statusColors: Record<string, string> = {
    'Pending': 'bg-orange-100 text-orange-600',
    'Approved': 'bg-blue-100 text-blue-600',
    'Ready': 'bg-green-100 text-green-600',
    'Rejected': 'bg-red-100 text-red-600',
  };

  return (
    <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border dark:border-slate-800 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">description</span>
        </div>
        <div>
          <h5 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{name}</h5>
          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{date} • {id}</p>
        </div>
      </div>
      <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${statusColors[status] || 'bg-slate-100 text-slate-500'}`}>
        {status}
      </span>
    </div>
  );
};

export default RequestDocument;
