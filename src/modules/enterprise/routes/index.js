import { Router } from 'express'

import Functions from '../support/functions'

import { filter, accept } from '../../../middleware'
import { base } from '../pipeline'

const Routes = Router()
  .get(
    '/',
    filter({
      name: 'string',
      companyName: 'string',
      email: 'string',
      phone: 'string'
    }),
    base,
    Functions.get
  )
  .post(
    '/',
    accept({
      instance: 'body',
      fields: [ 'name', 'companyName', 'email', 'phone', 'adminUser' ]
    }),
    Functions.post
  )
  .patch(
    '/',
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
  .delete(
    '/:id',
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

export default Routes
