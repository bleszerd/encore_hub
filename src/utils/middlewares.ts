import jwt from 'jsonwebtoken'

const SECREY_KEY: jwt.Secret | undefined = process.env.JWT_KEY

export function verifyToken(jwtToken: any) {
    try {
        if (!SECREY_KEY) {
            throw new Error("You need to provide a JWT_KEY as your environment variable.")
        }

        return jwt.verify(jwtToken, SECREY_KEY)
    } catch (err) {
        console.log(err);
        return null
    }
}