const search = (state = {}, action) => {
  switch(action.type){
    case 'SEARCH_MOVIES':
      return {query: action.query}
    default:
      return ""
  }
}

export default search