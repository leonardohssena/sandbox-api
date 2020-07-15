import { Router } from 'express'

import Functions from '../support/functions'

import { filter } from '../../../middleware'
import { base } from '../pipeline'

const Routes = Router()
  .get(
    '/',
    filter({
      name: 'string',
      email: 'string',
      username: 'string',
      phone: 'string',
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
  .get(
    '/details/:id',
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
  .get(
    '/profile',
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
    '/',
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
  .patch(
    '/forgot-password/send-pin',
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
  .patch(
    '/forgot-password/validate-pin',
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
  .patch(
    '/forgot-password',
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
  .patch(
    '/password',
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
