import { concat, pipe, replace } from 'ramda'

const concatMany = (...strs) => strs.reduce(concat, '')

const removeAllSpecialCaracteres = replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '')
const removeAllSpaces = replace(/ /g, '')

const unFormat = pipe(removeAllSpecialCaracteres, removeAllSpaces)

const randomHash = ({ length = 10 }) => Math.random().toString(36).substr(2, length)

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export {
  concatMany,
  unFormat,
  randomHash,
  randomNumber
}
