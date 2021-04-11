import { NextApiRequest, NextApiResponse } from "next";
import Post from '../../../../database/schemas/posts'
import '../../../../database/connection'
import { verifyToken } from "../../../../utils/middlewares";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        if (req.method != 'POST') {
            throw new Error("Method not allowed!")
        }

        const JWT = req.headers.authorization

        if(!JWT){
            throw new Error("You must to include authorization headers.")
        }

        const JWTisValid = verifyToken(JWT)

        if(!JWTisValid){
            throw new Error("Invalid authorization headers")
        }

        const { title, author, content, date, image, slug, tags } = req.body

        if (!title || !author || !content || !date || !image || !slug) {
            throw new Error("You must to include all required paramns!")
        }

        const response = await Post.create({
            title,
            slug,
            tags,
            author,
            content,
            date,
            image,
        })

        res.json({
            type: 'Response',
            message: 'Post Created!',
            result: response
        })

    } catch (err) {
        res.json({
            type: 'Error',
            message: `${err}`,
        })
    }
}