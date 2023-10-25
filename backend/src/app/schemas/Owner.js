import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const OwnerSchema = new mongoose.Schema(
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

export const parseOwner = async ownerBody => {
  return {
    first_name: ownerBody.firstName,
    last_name: ownerBody.lastName,
    email: ownerBody.email,
    password_hash: await bcrypt.hash(ownerBody.password, 8),
    birthday: ownerBody.birthday,
  };
};

export const validateUserPassword = (password, password_hash) => {
  return bcrypt.compare(password, password_hash);
};

export default mongoose.model('Owner', OwnerSchema);
