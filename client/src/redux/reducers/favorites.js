const initialState = {
  items: []
}


const favorites = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FAVORITES':
      return {
        ...state,
        items: action.payload
      }
    case 'IS_FAVORITE':
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload)
      }
    default:
      return state
  }
}

export default favorites