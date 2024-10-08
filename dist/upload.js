"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination(req, file, callback) {
        callback(null, 'assests/uploads/');
    },
    filename(req, file, callback) {
        callback(null, file.originalname);
    },
});
//creating a multer instance
exports.uploads = (0, multer_1.default)({ storage });
