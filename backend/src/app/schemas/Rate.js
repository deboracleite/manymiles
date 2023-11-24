import mongoose from 'mongoose';
import { formatDate } from '../utils/utils';
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

export const parseRateList = (rateList) => {
    return rateList.map(rate => ({
        id: rate._id,
        enjoy: rate.enjoy,
        feedback: rate.feedback,
        rate: rate.rate,
        from: formatDate(rate.rental_request_id.start_date),
        until: formatDate(rate.rental_request_id.end_date),
        userName: `${rate.user_id.first_name} ${rate.user_id.last_name}`
    }))
}

export default mongoose.model('Rate', RateSchema);