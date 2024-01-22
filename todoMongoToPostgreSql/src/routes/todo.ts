import express from 'express';
const router = express.Router();

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface CreateTodoInput {
    title: string;
    description: string;
}

router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validate that title and description are present
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        // Create a new todo in the database
        const createdTodo = await prisma.todo.create({
            data: {
                title ,
                description,
            }
        });

        // Respond with the created todo
        return res.json(createdTodo);
    } catch (error) {
        console.error('Error creating todo:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        // Disconnect from the Prisma client
        await prisma.$disconnect();
    }
});

export default router;
