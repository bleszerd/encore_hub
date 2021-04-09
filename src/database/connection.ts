import mongoose from 'mongoose'

async function dbConnect() {
    try {
        const mongoUri = process.env.MONGODB_URI

        if(!mongoUri)
            throw new Error("You need to provide a MONGODB_URI as your environment variable.")

        if (mongoose.connection.readyState >= 1)
            return
            

        return await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (err) {
        console.log(err);
    }
}

const database = dbConnect()

export default database