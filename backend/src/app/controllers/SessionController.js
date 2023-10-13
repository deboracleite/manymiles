import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User, { validateUserPassword } from '../schemas/User';
import authConfig from '../../config/auth';

class SessionController {
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
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ error: 'User not found' });
    }

    if (!(await validateUserPassword(password, user.password_hash))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, first_name, last_name } = user;

    return res.json({
      user: {
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

export default new SessionController();
