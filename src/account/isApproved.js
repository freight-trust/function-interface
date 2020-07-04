var axios = require('axios');

var config = {
  method: 'get',
  url: 'localhost:3000/nft/getApproved/?tokenId={{tokenId}}',
  headers: { 
    'Accept': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
