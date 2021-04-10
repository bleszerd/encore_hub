import '../connection'
import mongoose, {Document} from 'mongoose'
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
    },
    slug: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

PostSchema.plugin(mongoosePagination)

const Post: any | Pagination<Document> = mongoose.models.Post || mongoose.model<Document, Pagination<Document>>('Post', PostSchema, 'Posts')

export default Post