/* eslint-disable camelcase */
import { fetchPokemons, fetchPokemonByName } from '../services'

const reducer = (acc, { type }) => ([ ...acc, type.name ])

const getInfo = async ({ name }) => {
  const {
    base_experience,
    height,
    id,
    sprites,
    types,
    weight
  } = await fetchPokemonByName(name)

  return {
    name,
    baseExperience: base_experience,
    height,
    externalId: id,
    image: sprites.front_default,
    types: types.reduce(reducer, []),
    weight
  }
}

export default async (req, res, next) => {
  try {
    const pokemons = (await fetchPokemons({ limit: 151, offset: 0 })).results

    let data = []
    for (const pokemon of pokemons) {
      data = [ ...data, await getInfo(pokemon) ]
    }

    req.body = data

    next()
  } catch (err) {
    res.status(409).send({ status: 409, message: 'postError', error: err.message || err })
  }
}
