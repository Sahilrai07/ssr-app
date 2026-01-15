
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';

interface Message {
  text: string;
  sender: 'user' | 'ai';
  time: string;
}

const HelpSupport: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your SSR ACS AI assistant. How can I help you today?", sender: 'ai', time: '10:00 AM' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { text: input, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const responseText = await getGeminiResponse(input);
      const aiMsg: Message = { text: responseText, sender: 'ai', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg: Message = { text: "Sorry, I'm having trouble connecting to my brain right now.", sender: 'ai', time: 'Error' };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="p-4 bg-white dark:bg-surface-dark border-b dark:border-slate-800 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">headset_mic</span>
          </div>
          <div>
            <h2 className="font-bold dark:text-white">IT Support AI</h2>
            <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Online Now</p>
          </div>
        </div>
        <button className="text-slate-400"><span className="material-symbols-outlined">close</span></button>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-primary text-white rounded-tr-none shadow-md' : 'bg-white dark:bg-surface-dark text-slate-800 dark:text-slate-200 rounded-tl-none border dark:border-slate-800 shadow-sm'}`}>
              {msg.text}
            </div>
            <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
          </div>
        ))}
        {isTyping && (
          <div className="flex flex-col items-start animate-pulse">
            <div className="bg-slate-100 dark:bg-surface-dark px-4 py-3 rounded-2xl rounded-tl-none text-slate-400 text-xs font-medium">
              AI is thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-surface-dark border-t dark:border-slate-800 mb-[80px]">
        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 rounded-2xl p-1 pr-2">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your issue..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 py-3 dark:text-white"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="size-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg active:scale-95 transition-all disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
