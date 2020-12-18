const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({

    headerTitle: {
        type: String,
        required: true,
    },
    headerSecondTitle:{
        type: String,
        trim: true
    },
    mainTitle:{
        type: String,
        required: true,
    },
    firstText:{
        type: String,
        required: true,
    },
    secondText:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    live:{
        type: String,
    },
    mainImage:{
        type: String
    },
    images:{
        type: Array
    },
    latest:{
        type: Boolean
    },
    video:{
        type:Object
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;