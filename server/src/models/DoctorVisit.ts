import mongoose, { Document, Schema } from 'mongoose';

export interface IDoctorVisit extends Document {
  familyMemberId: mongoose.Types.ObjectId;
  doctorName: string;
  hospital?: string;
  reason: string;
  visitDate: Date;
  notes?: string;
  prescriptionUrl?: string;
  billUrl?: string;
  nextVisitDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const DoctorVisitSchema: Schema = new Schema(
  {
    familyMemberId: { type: Schema.Types.ObjectId, ref: 'FamilyMember', required: true },
    doctorName: { type: String, required: true },
    hospital: { type: String },
    reason: { type: String, required: true },
    visitDate: { type: Date, required: true },
    notes: { type: String },
    prescriptionUrl: { type: String },
    billUrl: { type: String },
    nextVisitDate: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IDoctorVisit>('DoctorVisit', DoctorVisitSchema);
