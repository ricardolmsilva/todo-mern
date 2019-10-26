const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

//  @route  POST api/users
//  @desc   Register user
//  @acess  Public
router.post(
	'/',
	[
		check('username', 'Username is required')
			.not()
			.isEmpty(),
		check('password', 'Please enter a password with 6 or mode characters')
			.isLength({
				min: 6
			})
			.custom((value, { req }) => {
				if (value !== req.body.passwordConfirmation) {
					// trow error if passwords do not match
					throw new Error("Passwords don't match")
				} else {
					return value
				}
			})
	],

	async (req, res) => {
		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array()
			})
		}

		const { username, password } = req.body

		try {
			let user = await User.findOne({
				username
			})

			if (user) {
				res.status(400).json({
					error: {
						msg: 'User already exists'
					}
				})
			}

			user = new User({ username, password })

			const salt = await bcrypt.genSalt(10)
			user.password = await bcrypt.hash(password, salt)

			user.save()

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
					res.json({ token })
				}
			)
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server error')
		}
	}
)

module.exports = router
