import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User, { validateUserPassword } from '../schemas/User';
import authConfig from '../../config/auth';
import Payment, { parsePaymentList, parsePaymentDetail } from '../schemas/Payment';

class PaymentController {

    async index(req, res) {
        const userId = await User.findOne({ _id: req.userId })

        if (!userId) {
            res.status(401).json({ error: 'User not found' });
        }

        const requests = await Payment.find({ user_id: req.userId }).populate({ path: 'rental_request_id', populate: { path: 'vehicle_id' } });

        return res.json(parsePaymentList(requests));
    }

    async detail(req, res) {
        const { paymentId } = req.params;
        const userId = await User.findOne({ _id: req.userId })

        if (!userId) {
            res.status(401).json({ error: 'User not found' });
        }

        const payment = await Payment.findOne({ user_id: req.userId, _id: paymentId }).populate({ path: 'rental_request_id', populate: { path: 'vehicle_id' } });

        return res.json(parsePaymentDetail(payment));
    }

    async update(req, res) {
        const { cardHolderName, lastFourDigits } = req.body;
        const { paymentId } = req.params;

        try {
            const payment = await Payment.updateOne({ _id: paymentId }, {
                status: 'paid',
                payment_method: 'credit card',
                payment_details: cardHolderName,
                last_four_digit: lastFourDigits
            });

            return res.json(payment);
        } catch (err) {
            console.log(err)
        }
    }
}

export default new PaymentController();
