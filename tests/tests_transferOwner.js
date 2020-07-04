/*  (C) 2020 FreightTrust and Clearing Corporation
 *	This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
function bytesVerify(proposed, bytes){ //proposed is the string to be checked, bytes is the byte size of the encoded data",
	 return ((typeof proposed == "string") && (proposed.length == 2*bytes+2) && isHexStrict(proposed))
}
function isHexStrict(proposed){//I wrote a clone of web3.isHexStrict, so we don't have to run a node to test code",
    proposed = proposed.toLowerCase()
	flag = (proposed.slice(0,2) == "0x")
	for(i = 2;  i < proposed.length; i ++) {
		test = proposed.charAt(i)
		flag = flag && (test <= '9' || ((test>='a')&&(test<='f')))
	}
    return flag
}
function authVerify(authArray) {
	if((authArray.length != 4) ||
		(!bytesVerify(authArray[0], 32)) ||
		(!bytesVerify(authArray[1], 1)) ||
		(!bytesVerify(authArray[2], 32)) ||
		(!bytesVerify(authArray[3], 32)))
	{
		return false;
	}
	else {
	    return true
	}
}

pm.test("Rejects Invalid Data Types", function () {
	let auth = [pm.variables.get("hash"), pm.variables.get("v"), pm.variables.get("r") , pm.variables.get("s")];
									 
	if(bytesVerify(pm.variables.get("from"),20) && (bytesVerify(pm.variables.get("to"),20)) && bytesVerify(pm.variables.get("tokenId"), 32) && authVerify(auth)){
		pm.expect(pm.response.code).to.be.oneOf([200,425]);
	}
	else {
		pm.expect(pm.response.code).to.be.oneOf([400,425]);
	}
});