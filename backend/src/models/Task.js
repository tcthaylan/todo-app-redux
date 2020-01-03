const mongoose = require('../database/index')

const TaskSchema = mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Task', TaskSchema)