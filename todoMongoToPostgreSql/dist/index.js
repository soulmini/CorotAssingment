"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const todo_1 = __importDefault(require("./routes/todo"));
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/todo", todo_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
