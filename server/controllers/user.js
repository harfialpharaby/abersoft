const { user } = require('../models')
const jwt = require('../helpers/jwt')

class User {
  static async register(req, res) {
    try {
      const { email, password } = req.body
      const registeredUser = await user.create({
        email,
        password
      })
      res.status(201).json(registeredUser)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body
      const loginUser = await user.findOne({
        where: {
          email, password
        }
        })
      if (!loginUser) {
        res.status(400).json({
          message: 'User not registered!'
        })
      } else {
        const token = jwt.generateToken(
          {
            email: loginUser.email,
            id: loginUser.id
          },
          process.env.JWT_SECRET
        )
        res.status(200).json({ token })
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async getUserByEmail(req, res) {
    try {
      const { email } = req.query
      const userData = await user.findOne({
        where: {
          email
        }
      })
      res.status(200).json(userData)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await user.findAll()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = User