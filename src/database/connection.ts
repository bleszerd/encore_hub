import mongoose from 'mongoose'

const mongoConnectionUri = process.env.MONGO_URI

if(!mongoConnectionUri)
    throw new Error('You need to provide a MONGO_URI as your environment variable.')


const dbConnection = mongoose.connect(mongoConnectionUri, (err)=>{
    if(err)
        console.error(err)

    console.log(`[MongoDB] Database Connected`);
    
})

export default dbConnection