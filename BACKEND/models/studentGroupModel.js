import mongoose from 'mongoose';

const StudentGroupModel = mongoose.Schema({

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref:'user'
    }],

    topic: {
        type: String,
        required: false
    },

    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref:'user'
    },

    co_supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'user'
    },

    attachments:[{
        type: String,
        required: false,
    }],

    panel: [{
        type: mongoose.Schema.Types.ObjectId,
        retuired: false,
        ref: 'user'
    }]
        
});

const StudentGroup = mongoose.model('StudentGroup', StudentGroupModel);
export default StudentGroup;