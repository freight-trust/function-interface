var axios = require('axios');
var data = JSON.stringify({"auth":{"sig":"{{sig}}"}});

var config = {
  method: 'post',
  url: 'localhost:3000/nft/transferFrom/?from={{from}}&to={{to}}&tokenId={{tokenId}}',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
