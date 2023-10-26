import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import  Owner, { validateOwnerPassword } from '../schemas/Owner';
import authConfig from '../../config/auth';

class SessionControllerOwner {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email, password } = req.body;
    const owner = await Owner.findOne({ email });
    console.log("Here");
    if (!owner) {
      res.status(401).json({ error: 'User not found' });
    }

    if (!(await validateOwnerPassword(password, owner.password_hash))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, first_name, last_name } = owner;

    return res.json({
      owner: {
        id,
        first_name,
        last_name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionControllerOwner();
