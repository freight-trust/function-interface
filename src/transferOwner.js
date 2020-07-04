/*  (C) 2020 FreightTrust and Clearing Corporation
 *	This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var axios = require('axios');
var data = JSON.stringify({"auth":{"sig":"{{sig}}"}});

var config = {
  method: 'post',
  url: 'localhost:3000/nft/safeTransferFrom/?from={{from}}&to={{to}}&tokenId={{tokenId}}&extraData={{extraData}}',
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
