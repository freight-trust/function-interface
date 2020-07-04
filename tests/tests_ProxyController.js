function bytesVerify(proposed, bytes){ //proposed is the string to be checked, bytes is the byte size of the encoded data
  return ((typeof proposed == "string") && (proposed.length == 2*bytes+2) && isHexStrict(proposed))
}
function isHexStrict(proposed){//I wrote a clone of web3.isHexStrict, so we don't have to run a node to test code
  proposed = proposed.toLowerCase()
  flag = (proposed.slice(0,2) == "0x")
  for(i = 2;  i < proposed.length; i ++){
    test = proposed.charAt(i)
    flag = flag && (test <= '9' || ((test>='a')&&(test<='f')))
  }
  return flag
}


pm.test("Rejects Invalid Data Types", function () {
    if(!bytesVerify(pm.iterationData.get("newController"), 20)){
        pm.expect(pm.response.code).to.be.oneOf([400, 425]);
    }
});