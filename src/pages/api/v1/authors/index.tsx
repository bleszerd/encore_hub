import { NextApiRequest, NextApiResponse } from "next";
import Author from '../../../../database/schemas/authors'
import '../../../../database/connection'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        if(req.method != 'GET'){
            throw new Error("Method not allowed")
        }
        
        const page = req.query.page || 1
        const limit = req.query.limit || 9

        const response = await Author.paginate({
            limit,
            page
        })

        res.json({
            type: 'Response',
            message: 'Authors Recovered!',
            result: response
        })

    }catch(err){
        res.json({
            type: 'Error',
            message: `${err}`,
        })
    }
}