import axios from 'axios'

export const fetchFavorites = () => (dispatch) => {
  axios.get('http://localhost:8000/api/pokemons/?isFavorite=true')
    .then(({data}) => {
      dispatch(setFavorites(data))
    })
}

export const visibleFavorite = (id, favorite) => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  const data = {isFavorite: !favorite}
  axios.patch(`http://localhost:8000/api/pokemons/${id}/`, data, headers).then(() => {
    dispatch(isFavorite(id))
  })
}

export const isFavorite = (id) => ({
  type: 'IS_FAVORITE',
  payload: id
})

export const setFavorites = (data) => ({
  type: 'SET_FAVORITES',
  payload: data
})