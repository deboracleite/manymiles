import mongoose from 'mongoose';

const ExperienceEvaluationSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rental_request_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RentalRequest',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  'ExperienceEvaluation',
  ExperienceEvaluationSchema
);
