import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Plus } from 'lucide-react';

export const Home = () => {
  return (
    <div className="p-6 pb-24 space-y-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-dark">Good Morning,</h1>
          <p className="text-text-light">What needs attention today?</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden flex items-center justify-center">
          <span className="text-primary font-semibold text-lg">R</span>
        </div>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-3">Today's Medicines</h2>
        <Card className="flex items-center justify-between border-l-4 border-l-primary">
          <div>
            <h3 className="font-semibold text-lg">Amlodipine 5mg</h3>
            <p className="text-sm text-text-light">For Dad • 08:00 AM • After Food</p>
          </div>
          <Button size="icon" className="rounded-full h-10 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </Button>
        </Card>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <Card className="bg-[#E6F4EA] border-none p-4">
          <h3 className="font-medium text-primary-dark">Water Progress</h3>
          <p className="text-2xl font-bold text-primary mt-2">4 / 8</p>
          <p className="text-sm text-primary-dark/70">glasses today</p>
        </Card>
        <Card className="bg-[#FFF4E5] border-none p-4">
          <h3 className="font-medium text-reminder">Sugar Reminder</h3>
          <p className="text-xl font-bold text-[#D97706] mt-2">Check</p>
          <p className="text-sm text-[#D97706]/70">Before Lunch</p>
        </Card>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-20 right-4 md:right-[calc(50%-13rem)] w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors z-40">
        <Plus size={28} />
      </button>
    </div>
  );
};
