const removeEmpty = ([ _, value ]) => !!value
const transform = ([ key, value ]) => `${key}=${value}`
const reducer = (acc, value) => (`${acc}${acc ? '&' : '?'}${value}`)
const castParams = (params) => (
  Object
    .entries(params)
    .filter(removeEmpty)
    .map(transform)
    .reduce(reducer, '')
)

const notEmpty = ({ description }) => !!description
const format = ({ description }) => `<br>${description}</br>`
const errorsMessage = (errors = []) => errors
  .filter(notEmpty)
  .map(format)
  .join('')

export {
  castParams,
  errorsMessage
}
