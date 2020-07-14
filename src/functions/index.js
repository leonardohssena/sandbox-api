import get from './get'
import post from './post'

const reducer = (params) => (acc, [ key, value ]) => ({ ...acc, [key]: value(...params) })

const functions = {
  get,
  post
}

export default (...params) => {
  const onReducer = reducer(params)

  return Object
    .entries(functions)
    .reduce(onReducer, {})
}
