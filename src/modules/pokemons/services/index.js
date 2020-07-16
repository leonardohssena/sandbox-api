import http from './http'
import { castParams } from '../../../support/utils'

const fetchPokemons = (params) => http.get(`/pokemon${castParams(params)}`)

const fetchPokemonByName = (name) => http.get(`/pokemon/${name}`)

export { fetchPokemons, fetchPokemonByName }
