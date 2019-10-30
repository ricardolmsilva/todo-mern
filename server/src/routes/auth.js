const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

//  @route  GET api/users
//  @desc   Get auth user
//  @acess  Private
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password')
		res.json(user)
	} catch (err) {
		console.error(err)
		res.status(500).send('Server error')
	}
})

//  @route  POST api/users
//  @desc   Authenticate user & get token
//  @acess  Public
router.post(
	'/',
	[
		check('username', 'Please include a valid username')
			.not()
			.isEmpty(),
		check('password', 'The password is required')
			.not()
			.isEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({
				error: {
					msg: 'Creditials are incorrect'
				}
			})
		}

		const { username, password } = req.body

		try {
			const user = await User.findOne({ username })
			if (!user) {
				return res.status(400).json({
					error: {
						msg: 'Creditials are incorrect'
					}
				})
			}

			const isMatch = await bcrypt.compare(password, user.password)

			if (!isMatch) {
				return res.status(400).json({
					error: {
						msg: 'Creditials are incorrect'
					}
				})
			}

			const payload = {
				user: {
					id: user.id
				}
			}

			jwt.sign(
				payload,
				process.env.JWT_SECRET,
				{ expiresIn: 3600 },
				(err, token) => {
					if (err) throw err
					res.json({ username: user.username, token })
				}
			)
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server error')
		}
	}
)

module.exports = router
