import { Card } from '../../components/ui/Card';
import { PhoneCall, HeartPulse, ShieldAlert, Settings, LogOut } from 'lucide-react';

export const More = () => {
  return (
    <div className="p-6 pb-24 space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-text-dark">More</h1>
        <p className="text-text-light">Settings & Emergency</p>
      </header>

      <Card className="bg-red-50 border border-red-100 p-5">
        <div className="flex items-center gap-3 text-emergency mb-4">
          <ShieldAlert size={24} />
          <h2 className="font-bold text-lg">Emergency Contact</h2>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-red-50">
            <div>
              <p className="font-semibold text-text-dark">Dr. Arvind Mehta</p>
              <p className="text-xs text-text-light">Cardiologist • Apollo Hospital</p>
            </div>
            <button className="w-10 h-10 bg-emergency text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
              <PhoneCall size={18} />
            </button>
          </div>
          
          <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-red-50">
            <div>
              <p className="font-semibold text-text-dark">Ambulance</p>
              <p className="text-xs text-text-light">National Emergency Line</p>
            </div>
            <button className="w-10 h-10 bg-emergency text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
              <PhoneCall size={18} />
            </button>
          </div>
        </div>
      </Card>

      <section className="space-y-2">
        <div className="bg-white rounded-2xl p-2 border border-divider">
          {[
            { icon: HeartPulse, label: 'My Health Profile', color: 'text-primary', bg: 'bg-green-50' },
            { icon: Settings, label: 'App Settings', color: 'text-gray-600', bg: 'bg-gray-100' },
          ].map((item, i) => (
            <button key={i} className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors text-left">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                <item.icon size={20} />
              </div>
              <span className="font-medium flex-1">{item.label}</span>
              <span className="text-gray-300">❯</span>
            </button>
          ))}
        </div>
      </section>

      <button className="w-full flex items-center justify-center gap-2 text-text-light hover:text-emergency transition-colors py-4 font-medium">
        <LogOut size={20} />
        Sign Out
      </button>
    </div>
  );
};
