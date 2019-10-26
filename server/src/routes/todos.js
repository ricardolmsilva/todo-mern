const express = require('express')
const router = express()
const auth = require('../middlewares/auth')
const { check, validationResult } = require('express-validator')

const Todo = require('../models/Todo')

//  @route  GET api/todos
//  @desc   GET all TODOS
//  @acces  Private
router.get('/', auth, async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id }).sort({ createdAt: -1 })
        res.json(todos)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server error')
    }
})

//  @route  POST api/todos
//  @desc   Create new TODO
//  @acces  Private
router.post('/', [
    check('description', 'Description is required').not().isEmpty()
], auth, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    try {
        const { description } = req.body
        const todo = new Todo({ user: req.user.id, description })
        todo.save()
        res.json(todo)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server error')
    }
})

//  @route  PUT api/todos
//  @desc   Update TODO
//  @acces  Private
router.put('/:id', auth, async (req, res) => {
    try {

        const todo = await Todo.findById(req.params.id)

        if (!todo) {
            return res.status(404).json({
                msg: 'Todo not found'
            })
        }

        //  Check the owner 
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'User not authorized'
            })
        }

        todo.done = !todo.done
        todo.save(todo)
        res.json(todo)

    } catch (err) {
        console.error(error)
        if (error.kind == 'ObjectId') {
            return res.status(404).json({
                msg: 'Todo not found'
            })
        }
        res.status(500).send('Server error')
    }
})

//  @route  DELETE api/todos
//  @desc   Delete todo
//  @acces  Private
router.delete('/:id', auth, async (req, res) => {

    try {
        const todo = await Todo.findById(req.params.id)

        if (!todo) {
            return res.status(404).json({
                msg: 'Todo not found'
            })
        }

        //  Check the owner 
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'User not authorized'
            })
        }

        await todo.remove()

        res.json({
            msg: 'Todo removed'
        })

    } catch (error) {
        console.error(error)
        if (error.kind == 'ObjectId') {
            return res.status(404).json({
                msg: 'Todo not found'
            })
        }
        res.status(500).send('Server error')
    }
})


module.exports = router