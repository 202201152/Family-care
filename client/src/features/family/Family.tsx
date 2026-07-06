import { Card } from '../../components/ui/Card';
import { User, Phone, AlertCircle } from 'lucide-react';

const mockFamily = [
  {
    id: '1',
    name: 'Robert Sharma',
    relation: 'Father',
    age: 68,
    status: 'Needs BP Check',
    statusColor: 'text-reminder',
    bgColor: 'bg-orange-50',
  },
  {
    id: '2',
    name: 'Asha Sharma',
    relation: 'Mother',
    age: 64,
    status: 'All Good',
    statusColor: 'text-success',
    bgColor: 'bg-[#E6F4EA]',
  },
];

export const Family = () => {
  return (
    <div className="p-6 pb-24 space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-text-dark">My Family</h1>
        <p className="text-text-light">Manage health profiles</p>
      </header>

      <section className="space-y-4">
        {mockFamily.map((member) => (
          <Card key={member.id} hoverable className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
              <User size={28} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-text-light">{member.relation} • {member.age} yrs</p>
              <div className={`inline-flex items-center gap-1 mt-2 px-2 py-1 rounded-md ${member.bgColor}`}>
                {member.status === 'All Good' ? (
                  <div className={`w-2 h-2 rounded-full bg-success`} />
                ) : (
                  <AlertCircle size={12} className={member.statusColor} />
                )}
                <span className={`text-xs font-medium ${member.statusColor}`}>{member.status}</span>
              </div>
            </div>
            <button className="p-3 text-primary hover:bg-primary/10 rounded-full transition-colors">
              <Phone size={20} />
            </button>
          </Card>
        ))}
      </section>

      <button className="w-full py-4 border-2 border-dashed border-primary/30 text-primary rounded-[20px] font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
        <User size={20} />
        Add Family Member
      </button>
    </div>
  );
};
