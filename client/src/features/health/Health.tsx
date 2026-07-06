import { Card } from '../../components/ui/Card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const mockBpData = [
  { day: 'Mon', sys: 120, dia: 80 },
  { day: 'Tue', sys: 122, dia: 82 },
  { day: 'Wed', sys: 118, dia: 79 },
  { day: 'Thu', sys: 125, dia: 84 },
  { day: 'Fri', sys: 121, dia: 81 },
  { day: 'Sat', sys: 119, dia: 78 },
  { day: 'Sun', sys: 120, dia: 80 },
];

export const Health = () => {
  return (
    <div className="p-6 pb-24 space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-text-dark">Health Records</h1>
        <p className="text-text-light">Weekly overview</p>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
        {['Blood Pressure', 'Sugar', 'Weight', 'Water'].map((tab, i) => (
          <button 
            key={tab}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
              i === 0 ? 'bg-primary text-white' : 'bg-white text-text-light border border-divider'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <Card className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg">Blood Pressure</h3>
          <p className="text-sm text-text-light">Robert Sharma (Father)</p>
        </div>
        
        <div className="h-48 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockBpData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} domain={['dataMin - 10', 'dataMax + 10']} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
              />
              <Line type="monotone" dataKey="sys" name="Systolic" stroke="#EF4444" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="dia" name="Diastolic" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 mt-4">
          <p className="text-sm text-blue-800 font-medium">
            Your blood pressure has stayed steady this week. Great job!
          </p>
        </div>
      </Card>
    </div>
  );
};
