import { Home, Users, Activity, FileText, Menu } from 'lucide-react';
import { NavLink } from 'react-router';
import { cn } from '../ui/Button';

export const BottomNav = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Family', path: '/family', icon: Users },
    { name: 'Health', path: '/health', icon: Activity },
    { name: 'Reports', path: '/reports', icon: FileText },
    { name: 'More', path: '/more', icon: Menu },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-divider pb-safe pt-2 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center justify-center w-16 h-14 transition-colors',
                  isActive ? 'text-primary' : 'text-text-light hover:text-text-dark'
                )
              }
            >
              <Icon size={24} className="mb-1" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
