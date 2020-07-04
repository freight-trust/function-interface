/*  (C) 2020 FreightTrust and Clearing Corporation
 *	This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
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
