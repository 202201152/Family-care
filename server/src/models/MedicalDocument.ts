import mongoose, { Document, Schema } from 'mongoose';

export interface IMedicalDocument extends Document {
  familyMemberId: mongoose.Types.ObjectId;
  title: string;
  type: 'Prescription' | 'Blood Report' | 'MRI' | 'CT' | 'X-Ray' | 'Bill' | 'Insurance' | 'Discharge Summary' | 'Other';
  fileUrl: string;
  documentDate: Date;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const MedicalDocumentSchema: Schema = new Schema(
  {
    familyMemberId: { type: Schema.Types.ObjectId, ref: 'FamilyMember', required: true },
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ['Prescription', 'Blood Report', 'MRI', 'CT', 'X-Ray', 'Bill', 'Insurance', 'Discharge Summary', 'Other'],
      required: true,
    },
    fileUrl: { type: String, required: true },
    documentDate: { type: Date, required: true },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMedicalDocument>('MedicalDocument', MedicalDocumentSchema);
