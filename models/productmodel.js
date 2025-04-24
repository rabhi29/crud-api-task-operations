const mongoose = require('mongoose');
const taskSchema = mongoose.Schema(//schema vah oru variable la specify panni vaikurom
    {
        taskname:{
            type:String,
            required:[true,"please enter your name"]
        },
        assignedto:{
             type:String,
             required:true
        },
        module: {
            type: String,
            enum: ['FI', 'CO', 'MM', 'SD', 'PP', 'HR'], // Common SAP modules
            required: true
        },
        status: {
            type: String,
            enum: ['Open', 'In Progress', 'Testing', 'Completed'],
            default: 'Open'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        sla: {
            type: Date,
            required: false
        },
        priority: {
            type: String,
            enum: ['Low', 'Medium', 'High'],
            default: 'Medium'
        }


    },
    {
        timestamps:true
    }
)
const Task = mongoose.model("products",taskSchema);//inoru puthu variable la schma vah model panurom
module.exports = Task;//index.js ku export panurom so that global aa view aagum