import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User, { validateUserPassword } from '../schemas/User';
import authConfig from '../../config/auth';
import Payment, { parsePaymentList, parsePaymentDetail } from '../schemas/Payment';
import Rate from '../schemas/Rate';
class PaymentController {

    async index(req, res) {
        const userId = await User.findOne({ _id: req.userId })

        if (!userId) {
            res.status(401).json({ error: 'User not found' });
        }

        const requests = await Payment.find({ user_id: req.userId }).populate({ path: 'rental_request_id', populate: { path: 'vehicle_id' } });

        const paymentsParsed = await Promise.all(requests.map(async (payment) => {
            const hasRate = await Rate.exists({ rental_request_id: payment.rental_request_id._id })
            return {
                ...payment._doc,
                hasRate: !!hasRate
            }
        }))

        return res.json(parsePaymentList(paymentsParsed));
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
