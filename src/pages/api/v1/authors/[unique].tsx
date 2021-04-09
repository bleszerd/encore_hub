import { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from 'mongoose'
import Author from '../../../../database/schemas/authors'
import '../../../../database/connection'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        if (req.method != 'GET') {
            throw new Error("Method not allowed")
        }

        let queryFilter = "username"
        const unique = req.query.unique

        if(isValidObjectId(unique)){
            queryFilter = "_id"
        }

        const response = await Author.findOne({
            [queryFilter]: unique
        })

        res.json({
            type: 'Response',
            message: 'Author Recovered!',
            result: response
        })

    } catch (err) {
        res.json({
            type: 'Error',
            message: `${err}`,
        })
    }
}