"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        // Validate that title and description are present
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }
        // Create a new todo in the database
        const createdTodo = yield prisma.todo.create({
            data: {
                title,
                description,
            }
        });
        // Respond with the created todo
        return res.json(createdTodo);
    }
    catch (error) {
        console.error('Error creating todo:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    finally {
        // Disconnect from the Prisma client
        yield prisma.$disconnect();
    }
}));
exports.default = router;
