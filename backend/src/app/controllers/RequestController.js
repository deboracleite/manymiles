import * as Yup from 'yup';
import User from '../schemas/User';
import Payment from '../schemas/Payment';
import RentalRequest, { parseRentalRequestList, parseRentalRequest } from '../schemas/RentalRequest';
import Vehicle from '../schemas/Vehicle';
class RequestController {
    async store(req, res) {

        const request = Yup.object().shape({
            start_date: Yup.date(),
            end_date: Yup.date(),
            user_id: Yup.string(),
            vehicle_id: Yup.string(),
            owner_id: Yup.string(),
            vehicle_details: Yup.string(),
            priceWithoutTax: Yup.number(),
            priceWithTax: Yup.number(),
            status: Yup.string()
        })

        if (!(await request.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { vehicle_id } = req.body;

        const vehicleId = await Vehicle.findOne({ _id: vehicle_id })

        const userId = await User.findOne({ _id: req.userId })

        if (!(vehicleId && userId)) {
            return res.status(400).json({ error: 'Vehicle already exists.' });
        }

        const { user_id, _id: rental_request_id, priceWithoutTax: amount } = await RentalRequest.create({ ...req.body, user_id: req.userId, owner_id: req.userId })

        const { _id: paymentId } = await Payment.create({
            status: 'pending',
            user_id,
            rental_request_id,
            amount,
        })

        return res.json({ paymentId });
    }


    async index(req, res) {
        const userId = await User.findOne({ _id: req.userId })

        if (!userId) {
            res.status(401).json({ error: 'User not found' });
        }

        const requests = await RentalRequest.find({ status: 'pending' })
            .populate({
                path: 'vehicle_id',
                match: { user_id: req.userId },
            });

        const arrayOfIds = requests.map(el => el._id);

        const rentalRequestIds = (await Payment.distinct('rental_request_id', {
            rental_request_id: { $in: arrayOfIds },
            status: 'paid'
        })).map(String);

        const filteredRequests = requests.filter(el => rentalRequestIds.includes(String(el['_id'])));

        return res.json(parseRentalRequestList(filteredRequests));
    }

    async update(req, res) {
        const { decision } = req.body
        const { id } = req.params;
        try {
            const response = await RentalRequest.updateOne({ _id: id }, {
                status: decision
            })

            return res.json(response)
        } catch (err) {
            console.log(err)
        }

    }

    async fetchDetails(req, res) {

        const requests = await RentalRequest.find({ user_id: req.userId });

        return res.json(requests);

    }

    async getOne(req, res) {
        const { id: rentalRequestId } = req.params;
        const requests = await RentalRequest.findOne({ _id: rentalRequestId })
            .populate('vehicle_id');

        return res.json(parseRentalRequest(requests));
    }
}

export default new RequestController();
