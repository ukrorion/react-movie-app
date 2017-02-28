const search = (state = "", action) => {
  console.log(action.query)
  switch(action.type){
    case 'SEARCH_MOVIES':
      return {query: action.query}
    default:
      return ""
  }
}

export default search;