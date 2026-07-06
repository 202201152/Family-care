import { Card } from '../../components/ui/Card';
import { FileText, Download, Upload } from 'lucide-react';

const mockDocs = [
  { id: 1, title: 'Blood Test Results', date: 'Oct 12, 2026', type: 'Blood Report' },
  { id: 2, title: 'Dr. Mehta Prescription', date: 'Sep 28, 2026', type: 'Prescription' },
  { id: 3, title: 'Chest X-Ray', date: 'Aug 15, 2026', type: 'X-Ray' },
];

export const Reports = () => {
  return (
    <div className="p-6 pb-24 space-y-6">
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-text-dark">Documents</h1>
          <p className="text-text-light">Safe & organized</p>
        </div>
        <button className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary/20 transition-colors">
          <Upload size={20} />
        </button>
      </header>

      <section className="space-y-3">
        {mockDocs.map((doc) => (
          <Card key={doc.id} hoverable className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-text-dark">{doc.title}</h3>
                <p className="text-xs text-text-light">{doc.type} • {doc.date}</p>
              </div>
            </div>
            <button className="text-text-light hover:text-primary transition-colors p-2">
              <Download size={20} />
            </button>
          </Card>
        ))}
      </section>
    </div>
  );
};
