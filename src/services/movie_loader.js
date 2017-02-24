import jQuery from 'jquery';

const loader = (url, query=null) => {
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

class MovieLoader {
  constructor(url) {
    this.url = url;
  }

  getShortInfo(search) {
    return loader(this.url, search);
  }

  getMovieDetails(id){
    return loader(this.url+id);
  }
}

export default MovieLoader;
