import { NextApiRequest, NextApiResponse } from 'next';
import Author from '../../../database/schemas/authors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const KEY = process.env.JWT_KEY

        if (!KEY) {
            throw new Error("You need to provide a JWT_KEY as your environment variable.")
        }

        if (req.method != 'POST') {
            throw new Error("Method not allowed!")
        }

        const { username, password } = req.body;

        if (!username || !password) {
            throw new Error("You must to include all required paramns!")
        }

        const response = await Author.findOne({
            username,
            password
        })

        if (!response) {
            throw new Error("User not finded!")
        }

        const payload = {
            username: response.username,
            createdAt: response.createdAt
        }

        //2629743 = 1 mes
        const jwtToken = jwt.sign(payload, KEY, {
            expiresIn: '2629743'
        })

        res.json({
            type: 'Response',
            message: 'Authentication sucess!',
            token: `Bearer ${jwtToken}`
        })
    } catch (err) {
        res.json({
            type: 'Error',
            message: `${err}`,
        })
    }
}