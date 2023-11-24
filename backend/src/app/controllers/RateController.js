import * as Yup from 'yup';
import Rate from '../schemas/Rate';

class RateController {
    async store(req, res) {

        const request = Yup.object().shape({
            enjoy: Yup.boolean(),
            rate: Yup.number(),
            feedback: Yup.string(),
            vehicle_id: Yup.string(),
            rental_request_id: Yup.string(),
        })

        if (!(await request.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { _id: rate_id } = await Rate.create({ ...req.body, user_id: req.userId })

        return res.json({ rate_id });
    }
}

export default new RateController();
