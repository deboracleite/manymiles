import * as Yup from 'yup';
import Owner, { parseOwner } from '../schemas/Owner';
import File from '../schemas/File';

class OwnerController {
  async store(req, res) {
    const schema = Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      birthday: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const ownerExist = await Owner.findOne({ email: req.body.email });

    if (ownerExist) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const owner = await parseOwner(req.body);

    const { id, first_name, last_name, email } = await Owner.create(owner);

    return res.json({ id, first_name, last_name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email, oldPassword } = req.body;
    const owner = await Owner.findByPk(req.userId);
    if (email !== owner.email) {
      const ownerExist = await Owner.findOne({
        where: { email },
      });
      if (ownerExist) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    await owner.update(req.body);
    const { id, name, avatar } = await Owner.findByPk(req.ownerId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
    return res.json({ id, name, email, avatar });
  }
}

export default new OwnerController();
