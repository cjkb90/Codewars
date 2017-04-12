function group(arr) {
  var kvp = {}; 
  var arrOfArrs = [];
  var index = 0;
  
  for (var i = 0; i<arr.length; i++){
    if (!kvp[arr[i]] && kvp[arr[i]] !== 0){
      kvp[arr[i]] = index;
      arrOfArrs.push([arr[i]]);
      index += 1;
    }
    else {
      arrOfArrs[kvp[arr[i]]].push(arr[i]);
    }
  }

  return arrOfArrs;
}
