import { NextApiRequest, NextApiResponse } from "next";
import Author from '../../../../database/schemas/authors'
import '../../../../database/connection'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method != 'POST') {
            throw new Error("Method not allowed!")
        }

        const { username, fullName, social, bio, fullText, birthday } = req.body

        if(!username || !fullName){
            throw new Error("You must to include all required paramns!")
        }

        const response = await Author.create({
            username,
            fullName,
            social,
            bio,
            fullText,
            birthday
        })

        res.json({
            type: 'Response',
            message: 'Author Created!',
            result: response
        })

    } catch (err) {
        res.json({
            type: 'Error',
            message: `${err}`,
        })
    }
}