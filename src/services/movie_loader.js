import jQuery from 'jquery';

const loader = (url, query=null) => {
  return jQuery.ajax({
    url: url,
    dataType: 'jsonp',
    crossDomain: true,
    data: {
      api_key: '1ee800a1-da00-4a23-ada1-6fa7026d651b',
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
