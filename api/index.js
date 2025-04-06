import express, { response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import postRoutes from './routes/post.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import multer from 'multer'
import path from 'path'

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    
    .then(()=> {console.log('MongoDB is connected');

    })
    .catch(err => {
    console.log(err);
    })

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage: storage
});

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
});

app.listen(3000, () => {

    console.log("Server port 3000");
    
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);


app.use((err, req, res, next ) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error' ;
    res.status(statusCode).json({
        success : false, 
        statusCode,
        message,
    });
});

