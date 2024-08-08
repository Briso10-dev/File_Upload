import { Request } from "express";
import multer from "multer";

const storage = multer.diskStorage({
    destination(req:Request, file, callback) {
        callback(null,'assests/uploads/')
    },
    filename(req:Request, file, callback) {
        callback(null,file.originalname)
    },
})
//creating a multer instance
export const uploads = multer({storage})