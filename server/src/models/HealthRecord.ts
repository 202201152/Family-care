import mongoose, { Document, Schema } from 'mongoose';

export interface IHealthRecord extends Document {
  familyMemberId: mongoose.Types.ObjectId;
  type: 'Blood Pressure' | 'Blood Sugar' | 'Weight' | 'Water' | 'Temperature' | 'Pulse' | 'Oxygen';
  value: string | number;
  unit: string;
  notes?: string;
  recordedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const HealthRecordSchema: Schema = new Schema(
  {
    familyMemberId: { type: Schema.Types.ObjectId, ref: 'FamilyMember', required: true },
    type: {
      type: String,
      enum: ['Blood Pressure', 'Blood Sugar', 'Weight', 'Water', 'Temperature', 'Pulse', 'Oxygen'],
      required: true,
    },
    value: { type: Schema.Types.Mixed, required: true }, // Mixed because BP is usually string "120/80", while weight is number
    unit: { type: String, required: true },
    notes: { type: String },
    recordedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IHealthRecord>('HealthRecord', HealthRecordSchema);
