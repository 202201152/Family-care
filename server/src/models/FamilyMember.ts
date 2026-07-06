import mongoose, { Document, Schema } from 'mongoose';

export interface IFamilyMember extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  relation: string;
  age: number;
  bloodGroup?: string;
  height?: number; // in cm
  weight?: number; // in kg
  allergies?: string[];
  diseases?: string[];
  doctorName?: string;
  emergencyContact?: string;
  medicalNotes?: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
}

const FamilyMemberSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    relation: { type: String, required: true },
    age: { type: Number, required: true },
    bloodGroup: { type: String },
    height: { type: Number },
    weight: { type: Number },
    allergies: [{ type: String }],
    diseases: [{ type: String }],
    doctorName: { type: String },
    emergencyContact: { type: String },
    medicalNotes: { type: String },
    photo: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IFamilyMember>('FamilyMember', FamilyMemberSchema);
