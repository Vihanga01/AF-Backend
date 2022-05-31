import mongoose from 'mongoose';

const ResearchModel = mongoose.Schema({

    studentGroup:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'StudentGroup'
    },

    topic: {
        type: String,
        required: true
    },

    supervisor_Approval:{
        type: String,
        required: true,
        default: 'Pending'
    },

    co_supervisor_Approval:{
        type: String,
        required: true,
        default: 'Pending'
    },

    attachments:{
        type: Array,
        required: false,
        default: []
    },

    panel_Approval:{
        type: String,
        required: true,
        default: 'Pending'
    }
 
});

const Research = mongoose.model('Research', ResearchModel);
export default Research;