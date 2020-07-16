import { Router } from 'express'

import Functions from '../support/functions'

import { filter } from '../../../middleware'
import { base } from '../pipeline'

import updateInApi from './updateInApi'

const Routes = Router()
  .get(
    '/',
    filter({
      name: 'string',
      email: 'string',
      username: 'string',
      status: 'array'
    }),
    base,
    Functions.get
  )
  .get(
    '/paginate',
    (req, res, next) => {
      try {
        res.status(200).send({ message: 'Sucesso' })
      } catch (err) {
        res.status(409).send({ message: 'Error' })
      } finally {
        next()
      }
    }
  )
  .post(
    '/updateInApi',
    updateInApi,
    Functions.insertMany
  )

export default Routes
