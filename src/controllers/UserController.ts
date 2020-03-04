import { Request, Response } from 'express';

const users = [
    { name: 'Fernando', email: 'fernando@email.com' },
    { name: 'Joaquim', email: 'joaquim@email.com' }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};