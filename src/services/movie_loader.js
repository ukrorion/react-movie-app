import jQuery from 'jquery';

let loader = (url, query=null) => {
  return jQuery.ajax({
    url: url,
    dataType: 'jsonp',
    crossDomain: true,
    data: {
      api_key: 'dc8b3c1c-2a30-4639-be6c-9b3c183f6485',
      q: query
    }
  })
}


const searchShortInfo = (query) => {
  return loader('http://imdb.wemakesites.net/api/search', query);
}

const getMovieDetails = (id) => {
  return loader(`http://imdb.wemakesites.net/api/${id}`);
}

export { searchShortInfo, getMovieDetails }