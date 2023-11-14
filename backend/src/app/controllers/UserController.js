import * as Yup from 'yup';
import User, { parseUser } from '../schemas/User';
import File from '../schemas/File';

class UserController {
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
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const user = await parseUser(req.body);

    const { id, first_name, last_name, email, user_type } = await User.create(user);

    return res.json({ id, first_name, last_name, email, user_type });
  }

  async update(req, res) {

    console.log(req.body);

    // const user = await User.findByPk(req.userId);
    const user = await User.findById(req.userId);

    console.log("oiii id", user);
    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }
    
    const schema = Yup.object().shape({
      firstName: Yup.string(),
      lastName: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6).notRequired(),
      confirmPassword: Yup.string()
        .when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        )
        .notRequired(),
    });

   const cleanUpEmpty = (body) => {
    return Object.entries(body).reduce((acc,[key,value]) => {
      if(value && isNaN(value)){
        acc[key] = value;
      }
      return acc;
    }, {});
   }

   const parsedBody = cleanUpEmpty(req.body);

    if (!(await schema.isValid(parsedBody))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
  
    if (parsedBody.email !== user.email) {
      const userExist = await User.findOne({
        where: { email: parsedBody.email },
      });
      if (userExist) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    
    if (parsedBody.password || parsedBody.confirmPassword) {
      
      if (parsedBody.password !== parsedBody.confirmPassword) {
        return res.status(400).json({ error: 'Password and Confirm Password do not match.' });
      }

      
      
    } 

    await user.update(parsedBody);

   
    const { _id, name, avatar, email } = await User.findById(req.userId).populate('avatar')

    return res.json({id: _id, name, avatar, email});
}


  // async update(req, res) {
  //   console.log("oiii");
  //   const schema = Yup.object().shape({
  //     firstName: Yup.string(),
  //     lastName: Yup.string(),
  //     email: Yup.string().email(),
  //     password: Yup.string().min(6),
  //     confirmPassword: Yup.string().when('password', (password, field) =>
  //       password ? field.required().oneOf([Yup.ref('password')]) : field
  //     ),
  //   });

  //   if (!(await schema.isValid(req.body))) {
  //     return res.status(400).json({ error: 'Validation fails' });
  //   }
  //   const { email } = req.body;
  //   const user = await User.findByPk(req.userId);

  //   if (email !== user.email) {
  //     const userExist = await User.findOne({
  //       where: { email },
  //     });
  //     if (userExist) {
  //       return res.status(400).json({ error: 'User already exists.' });
  //     }
  //   }

  //   // if (oldPassword && !(await user.checkPassword(oldPassword))) {
  //   //   return res.status(401).json({ error: 'Password does not match' });
  //   // }
    
  //   await user.update(req.body);
  //   const { id, name, avatar } = await User.findByPk(req.userId, {
  //     include: [
  //       {
  //         model: File,
  //         as: 'avatar',
  //         attributes: ['id', 'path', 'url'],
  //       },
  //     ],
  //   });
  //   return res.json({ id, name, email, avatar });
  // }

  // async update(req, res) {
  //   console.log("oiii");
  //   const schema = Yup.object().shape({
  //     firstName: Yup.string(),
  //     lastName: Yup.string(),
  //     email: Yup.string().email(),
  //     oldPassword: Yup.string().min(6),
  //     password: Yup.string()
  //       .min(6)
  //       .when('oldPassword', (oldPassword, field) =>
  //         oldPassword ? field.required() : field
  //       ),
  //     confirmPassword: Yup.string().when('password', (password, field) =>
  //       password ? field.required().oneOf([Yup.ref('password')]) : field
  //     ),
  //   });
  //   if (!(await schema.isValid(req.body))) {
  //     return res.status(400).json({ error: 'Validation fails' });
  //   }
  //   const { email, oldPassword } = req.body;
  //   const user = await User.findByPk(req.userId);
  //   if (email !== user.email) {
  //     const userExist = await User.findOne({
  //       where: { email },
  //     });
  //     if (userExist) {
  //       return res.status(400).json({ error: 'User already exists.' });
  //     }
  //   }

  //   if (oldPassword && !(await user.checkPassword(oldPassword))) {
  //     return res.status(401).json({ error: 'Password does not match' });
  //   }
    
  //   await user.update(req.body);
  //   const { id, name, avatar } = await User.findByPk(req.userId, {
  //     include: [
  //       {
  //         model: File,
  //         as: 'avatar',
  //         attributes: ['id', 'path', 'url'],
  //       },
  //     ],
  //   });
  //   return res.json({ id, name, email, avatar });
  // }
  async getUser(req, res){
    const user = await User.findOne({_id: req.userId})
    console.log(user)
    return res.json(user);
  }
}

export default new UserController();
