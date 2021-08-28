import axios from 'axios'

export const fetchPokemons = () => (dispatch) => {
  axios.get('http://localhost:8000/api/pokemons')
    .then(({data}) => dispatch(setPokemons(data)))
}

export const setPokemons = (data) => ({
  type: 'SET_POKEMONS',
  payload: data
})


export const deletePokemon = (id) => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  axios.delete(`http://localhost:8000/api/pokemons/${id}/`, headers).then(() => {
    dispatch(setDeletePokemon(id))
  })
}



export const setDeletePokemon = (id) => ({
  type: 'DELETE_POKEMON',
  payload: id
})