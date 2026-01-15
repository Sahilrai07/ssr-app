
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppTheme } from './types';
import Dashboard from './views/Dashboard';
import Login from './views/auth/Login';
import Registration from './views/auth/Registration';
import Profile from './views/Profile';
import Results from './views/academics/Results';
import ExamForms from './views/academics/ExamForms';
import Fees from './views/finance/Fees';
import Attendance from './views/academics/Attendance';
import Events from './views/events/Events';
import HelpSupport from './views/HelpSupport';
import NotificationPrefs from './views/NotificationPrefs';
import Onboarding from './views/Onboarding';
import BusTracking from './views/transport/BusTracking';
import Notices from './views/notices/Notices';

const AppWrapper: React.FC = () => {
  const [theme, setTheme] = useState<AppTheme>(AppTheme.LIGHT);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? AppTheme.DARK : AppTheme.LIGHT);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT;
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === AppTheme.DARK);
  };

  // Hide Navbar on auth pages
  const showNavbar = !['/login', '/register', '/onboarding', '/'].includes(location.pathname);

  return (
    <div className={`min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center selection:bg-primary/20`}>
      <div className="w-full max-w-md bg-white dark:bg-background-dark min-h-screen shadow-2xl relative flex flex-col">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/results" element={<Results />} />
          <Route path="/exam-forms" element={<ExamForms />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/events" element={<Events />} />
          <Route path="/support" element={<HelpSupport />} />
          <Route path="/notification-prefs" element={<NotificationPrefs />} />
          <Route path="/bus-tracking" element={<BusTracking />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>

        {showNavbar && (
          <nav className="fixed bottom-0 w-full max-w-md bg-white/90 dark:bg-surface-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe px-4 pt-2 z-50">
            <div className="flex justify-around items-center h-16">
              <NavButton icon="home" label="Home" active={location.pathname === '/dashboard'} onClick={() => navigate('/dashboard')} />
              <NavButton icon="calendar_month" label="Events" active={location.pathname === '/events'} onClick={() => navigate('/events')} />
              <NavButton icon="school" label="Results" active={location.pathname === '/results'} onClick={() => navigate('/results')} />
              <NavButton icon="person" label="Profile" active={location.pathname === '/profile'} onClick={() => navigate('/profile')} />
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

const NavButton: React.FC<{ icon: string; label: string; active: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-1 transition-colors ${active ? 'text-primary' : 'text-slate-400'}`}
  >
    <span className={`material-symbols-outlined text-[26px] ${active ? 'fill-[1]' : ''}`}>{icon}</span>
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
