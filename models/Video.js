const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({                    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    file: {
        type: Object,
        // type: String
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    question: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Video = mongoose.model('video', VideoSchema)
module.exports = Video
// module.exports = Video = mongoose.model('Video', VideoSchema);


// Sources:
// https://mongoosejs.com/docs/validation.html
// https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
