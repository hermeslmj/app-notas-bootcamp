import mongoose from 'mongoose';
import gradeModel from './grademodel.js';
import dotenv from 'dotenv';

dotenv.config();


const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grade = gradeModel(mongoose);

export { db };
