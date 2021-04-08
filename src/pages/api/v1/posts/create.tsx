import { NextApiRequest, NextApiResponse } from "next";
import Post from '../../../../database/schemas/posts'
import '../../../../database/connection'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method != 'POST') {
            throw new Error("Method not allowed!")
        }

        const { title, author, content, date, image, slug } = req.body

        if(!title || !author || !content || !date || !image || !slug){
            throw new Error("You must to include all required paramns!")
        }

        const response = await Post.create({
            title,
            slug,
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