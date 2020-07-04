var axios = require('axios');
var data = JSON.stringify({"auth":{"sig":"{{sig}}"}});

var config = {
  method: 'post',
  url: 'localhost:3000/proxy/changeController/?newController={{newController}}',
  headers: { 
    'Content-Type': 'application/json'
  },
  maxRedirects: 0,
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
