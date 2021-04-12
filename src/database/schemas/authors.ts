import '../connection'
import mongoose, { Document } from 'mongoose'
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts'

const AuthorsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    invite: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true
    },
    social: {
        twitter: {
            type: String
        },
        instagram: {
            type: String
        },
        github: {
            type: String
        },
        linkedin: {
            type: String
        }
    },
    bio: {
        type: String
    },
    fullText: {
        type: String
    },
    birthday: {
        type: String
    }
}, { timestamps: true })

AuthorsSchema.plugin(mongoosePagination)

const Author: any | Pagination<Document> = mongoose.models.Author || mongoose.model<Document, Pagination<Document>>('Author', AuthorsSchema, 'Authors')

export default Author