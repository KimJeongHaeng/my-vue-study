const data = [
    {
      id: 1,
      image: 'https://theweekly.co.kr/wp-content/uploads/2018/12/2555-5-1b.jpg',
      title: '중국 팔대요리',
      description: '팔대요리가 있당'
    },
    {
      id: 2,
      image: 'https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/039/143/medium/IMG_5649%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC.jpg?2019',
      title: '오사카 여행시 먹을거',
      description: '오사카 가면 먹는 거닷'
    }
  ]

const auth = () => {
  let settings = {
    "url": "https://movie-nodejs.herokuapp.com/auth/login",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Basic aGFlbmc6MTIzNA=="
    }
  };
  
  return new Promise( (res, reject) => {
    $.ajax(settings).done(function (response) {
      res(response);
    }).fail(function (err) { reject(err); });
  });
  
}

const getData = (token, title) => {
  let settings = {
    "url": `https://movie-nodejs.herokuapp.com/api/search/${title}`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": `Bearer ${token}`
    },
  };

  return new Promise( (res, reject) => {
    $.ajax(settings).done(function (response) {
      res(response);
    }).fail(function (err) { reject(err); });
  });  
};


export default {
  search : async (title) => {
    let token = await auth();
    let searchResult = await getData(token, title);

    return searchResult.results;
  }
}