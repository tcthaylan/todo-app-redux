const Task = require('../models/Task')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.json( tasks )
    } catch (error) {
        return res.status(400).send( error )
    }
})

router.get('/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params
        const task = await Task.findById(taskId)
        return res.json( task )
    } catch (error) {
        return res.status(400).send( error )
    }
})

router.post('/', async (req, res) => {
    try {
        const task = await Task.create(req.body) 
        return res.json( task )
    } catch (error) {
        return res.status(400).send( error )
    }
})

router.put('/:taskId', async (req, res) => {
   try {
        const { taskId } = req.params;
        const task = await Task.findByIdAndUpdate(taskId, req.body, {
            new: true
        })
        return res.json( task )
   } catch (error) {
        return res.status(400).send( error )
   }
})

router.delete('/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params;
        await Task.findByIdAndDelete(taskId)
        return res.status(200).send()
    } catch (error) {
        return res.status(400).send( error )
    }
})


module.exports = (app) => app.use('/task', router)