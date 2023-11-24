import mongoose from 'mongoose';

const RateSchema = new mongoose.Schema(
    {
        enjoy: {
            type: Boolean,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        feedback: {
            type: String,
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        vehicle_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehicle',
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

export default mongoose.model('Rate', RateSchema);