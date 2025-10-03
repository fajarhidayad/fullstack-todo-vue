import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'), // pastikan folder ada & tak bisa dieksekusi
  filename: (req, file, cb) => {
    // Hindari nama asli: gunakan random + ekstensi aman
    const ext = path.extname(file.originalname).toLowerCase();
    const safeName = crypto.randomBytes(16).toString('hex') + ext;
    cb(null, safeName);
  },
});

const limits = { fileSize: 2 * 1024 * 1024 };

const imageFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png'];
  console.log(file.mimetype);
  if (!allowed.includes(file.mimetype)) {
    return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'type'));
  }
  cb(null, true);
};

export const uploadSingleImage = multer({
  storage,
  limits,
  imageFilter,
}).single('file');
