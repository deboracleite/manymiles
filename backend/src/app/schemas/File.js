import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const parseFile = file => {
  const { originalname: name, filename: path } = file;
  return {
    name,
    path,
    url: `${process.env.APP_URL}/files/${path}`,
  };
};

export default mongoose.model('File', FileSchema);
