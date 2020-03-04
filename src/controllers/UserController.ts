import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Fernando', email: 'fernando@email.com' },
    { name: 'Joaquim', email: 'joaquim@email.com' }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: {
                name: 'Fernando',
                email: 'fernando@email.com'
            },
            message: {
                content: '',
                subject: 'Testando Typescript'
            }
        });

        return res.send();
    }
};