import { NextApiRequest, NextApiResponse } from "next";
import Post from '../../../../database/schemas/posts'
import '../../../../database/connection'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        if(req.method != 'GET'){
            throw new Error("Method not allowed")
        }
        
        const page = req.query.page || 1
        const limit = req.query.limit || 9

        const response = await Post.paginate({
            limit,
            page
        })

        res.json({
            type: 'Response',
            message: 'Post Recovered!',
            result: response
        })

    }catch(err){
        res.json({
            type: 'Error',
            message: `${err}`,
        })
    }
}