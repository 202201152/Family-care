import mongoose, { Document, Schema } from 'mongoose';

export interface IMedicine extends Document {
  familyMemberId: mongoose.Types.ObjectId;
  name: string;
  photo?: string;
  dose: string;
  time: string; // e.g., "08:00 AM"
  instructions: 'Before Food' | 'After Food' | 'With Food' | 'Anytime';
  isReminderActive: boolean;
  history: { date: Date; status: 'Taken' | 'Skipped' }[];
  refillDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const MedicineSchema: Schema = new Schema(
  {
    familyMemberId: { type: Schema.Types.ObjectId, ref: 'FamilyMember', required: true },
    name: { type: String, required: true },
    photo: { type: String },
    dose: { type: String, required: true },
    time: { type: String, required: true },
    instructions: {
      type: String,
      enum: ['Before Food', 'After Food', 'With Food', 'Anytime'],
      default: 'Anytime',
    },
    isReminderActive: { type: Boolean, default: true },
    history: [
      {
        date: { type: Date, required: true },
        status: { type: String, enum: ['Taken', 'Skipped'], required: true },
      },
    ],
    refillDate: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMedicine>('Medicine', MedicineSchema);
