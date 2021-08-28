const initialState = {
  items: []
}

const pokemons = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_POKEMONS':
      return {
        ...state,
        items: action.payload
      }
    case 'DELETE_POKEMON':
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload)
      }
    default:
      return state
  }
}

export default pokemons