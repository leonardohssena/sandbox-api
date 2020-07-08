import passport from 'passport'

import { localPassport } from '../helpers'
import { generateToken } from '../../../support/token'

const onError = (err, res, next) => {
  res.status(401).json(err)
  next()
}

export default async (req, res, next) => {
  localPassport({ usernameField: 'username' })
  passport.authenticate('local.user', (err, user) => {
    if (err || !user) {
      onError(err, res, next)
      return
    }
    req.logIn(user, err, async () => {
      if (err) {
        onError(err, res, next)
        return
      }
      const data = {
        id: user._id
      }
      const token = await generateToken(data)
      res.status(200).json({ token })
      next()
    })
  })(req, res, next)
}
