import { NextApiRequest, NextApiResponse } from "next";
import Author from '../../../../database/schemas/authors'
import '../../../../database/connection'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method != 'POST') {
            throw new Error("Method not allowed!")
        }

        const { username, password, fullName, social, bio, fullText, birthday, invite } = req.body

        if(!username || !fullName || !password || !invite){
            throw new Error("You must to include all required paramns!")
        }

        if(invite != "convitesecreto"){
            throw new Error("Invalid invite code")
        }

        const exist = await Author.findOne({
            username
        })

        if(exist){
            throw new Error(`${username} alread exists!`)
        }

        const response = await Author.create({
            username,
            password,
            invite,
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