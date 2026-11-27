import { model, Schema } from 'mongoose';

const appSchema = new Schema(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    age: { type: Number, required: true },
    source: { type: String, required: true },
    syncStatus: {
      type: String,
      enum: ['pending', 'synced', 'failed'],
      default: 'pending',
    },
  },
  { timestamps: true, versionKey: false },
);

export const Application = model('Applecation', appSchema);
