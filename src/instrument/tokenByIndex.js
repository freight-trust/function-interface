var axios = require('axios');

var config = {
  method: 'get',
  url: 'localhost:3000/nft/tokenByIndex/?index={{index}}',
  headers: { 
    'Accept': 'application/json'
  },
  maxRedirects: 0
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
