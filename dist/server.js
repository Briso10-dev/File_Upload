"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const upload_1 = require("./upload");
const app = (0, express_1.default)();
const port = 3002;
app.post("/uploads", upload_1.uploads.single('file'), (req, res) => {
    res.status(200).json({ msg: "file successfully uploaded" });
});
//creating server
app.listen(port, () => {
    console.log(chalk_1.default.green(`server running on ${port}`));
});
