import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Bell, Settings, ActivitySquare, Plus, Droplet, Pill } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home = () => {
  // State for Water Intake
  const [glasses, setGlasses] = useState(5);
  const totalGlasses = 12;
  const fillPercentage = Math.min((glasses / totalGlasses) * 100, 100);

  // State for Medication
  const totalMeds = 4;
  const [medsTaken, setMedsTaken] = useState(2);
  const medsRemaining = totalMeds - medsTaken;

  return (
    <div className="pb-24 space-y-6">
      {/* Top Header */}
      <header className="flex justify-between items-center p-6 pb-2">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white p-1.5 rounded-lg">
            <ActivitySquare size={20} />
          </div>
          <span className="font-bold text-lg tracking-tight">FamilyCare</span>
        </div>
        <div className="flex items-center gap-3 text-text-dark">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Greeting Section */}
      <section className="px-6">
        <h1 className="text-[28px] leading-tight font-bold text-text-dark">Good Morning, James</h1>
        <p className="text-sm text-text-light font-medium mt-1">6th August, 2026</p>
      </section>

      {/* Main Focus: Water and Medication */}
      <section className="px-6 space-y-6 mt-4">
        
        {/* 1. Water Intake Box */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg text-text-dark">Hydration</h2>
          <Card className="flex items-center justify-between p-6">
            <div className="flex flex-col items-center gap-4">
              {/* The "Glass" container */}
              <div className="relative w-24 h-32 rounded-b-2xl rounded-t-lg border-4 border-blue-100 bg-white overflow-hidden shadow-inner">
                {/* The Water */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-blue-400 opacity-80 rounded-b-xl"
                  initial={{ height: 0 }}
                  animate={{ height: `${fillPercentage}%` }}
                  transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                >
                  {/* Wave effect layer on top of water */}
                  <div className="absolute -top-2 left-0 right-0 h-4 bg-blue-300 rounded-[50%] blur-[2px] opacity-60"></div>
                </motion.div>
                
                {/* Overlay Text inside glass */}
                <div className="absolute inset-0 flex items-center justify-center z-10 drop-shadow-md">
                  <span className={`text-2xl font-bold ${fillPercentage > 40 ? 'text-white' : 'text-blue-500'}`}>
                    {glasses}<span className="text-sm font-medium">/{totalGlasses}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 flex-1 ml-6">
              <div className="text-right">
                <h3 className="font-bold text-text-dark text-lg">Water Intake</h3>
                <p className="text-sm text-text-light">{totalGlasses} glasses daily goal</p>
              </div>
              <Button 
                onClick={() => setGlasses(prev => Math.min(prev + 1, totalGlasses))}
                className="w-full flex gap-2 shadow-sm"
                disabled={glasses >= totalGlasses}
              >
                <Plus size={18} /> Add Glass
              </Button>
            </div>
          </Card>
        </div>

        {/* 2. Medication Box */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg text-text-dark">Medication</h2>
          <Card className="p-6 relative overflow-hidden">
            {/* Decorative Icon */}
            <div className="absolute -right-6 -top-6 text-primary/5">
              <Pill size={120} />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-2xl text-text-dark">{medsTaken} / {totalMeds}</h3>
                <p className="text-sm text-text-light font-medium uppercase tracking-wide">Meds Taken Today</p>
              </div>
              
              <Button 
                onClick={() => setMedsTaken(prev => Math.min(prev + 1, totalMeds))}
                variant="outline" 
                className="rounded-full shadow-sm"
                disabled={medsTaken >= totalMeds}
              >
                <Pill size={18} className="mr-2" /> Take Med
              </Button>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-100 rounded-full mt-6 relative z-10 overflow-hidden">
              <motion.div 
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(medsTaken / totalMeds) * 100}%` }}
                transition={{ type: 'spring', stiffness: 50 }}
              />
            </div>
          </Card>
          
          {/* Remaining mention below the box */}
          <div className="px-2">
            {medsRemaining > 0 ? (
              <p className="text-sm font-medium text-reminder flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-reminder animate-pulse"></span>
                You have {medsRemaining} remaining {medsRemaining === 1 ? 'medication' : 'medications'} for today.
              </p>
            ) : (
              <p className="text-sm font-medium text-success flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                All medications taken for today!
              </p>
            )}
          </div>
        </div>

      </section>
    </div>
  );
};
