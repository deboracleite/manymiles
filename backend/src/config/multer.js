import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

export default upload;
