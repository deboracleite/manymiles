import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
    user_type: {
      type: String,
      default: 'regular',
    },
  },
  {
    timestamps: true,
  }
);

export const parseUser = async userBody => {
  return {
    first_name: userBody.firstName,
    last_name: userBody.lastName,
    email: userBody.email,
    password_hash: await bcrypt.hash(userBody.password, 8),
    birthday: userBody.birthday,
  };
};

export const validateUserPassword = (password, password_hash) => {
  return bcrypt.compare(password, password_hash);
};

export default mongoose.model('User', UserSchema);
