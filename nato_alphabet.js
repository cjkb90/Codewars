function to_nato(words) {
  var wordsArr = words.split("");
  var dictionary = {a: "Alfa", b: "Bravo", c: "Charlie", d: "Delta", e: "Echo", f: "Foxtrot", g: "Golf", h: "Hotel", i: "India", j: "Juliett", k: "Kilo", l: "Lima", m: "Mike", n: "November", o: "Oscar", p: "Papa", q: "Quebec", r: "Romeo", s: "Sierra", t: "Tango", u: "Uniform", v: "Victor", w: "Whiskey", x: "Xray", y: "Yankee", z: "Zulu"};
  var output = [];
  for (var i = 0; i < wordsArr.length; i++){
    output.push(dictionary[wordsArr[i].toLowerCase()]);
    if (wordsArr[i] == "!"){output.push("!")}
    if (i<wordsArr.length-1 && wordsArr[i].toLowerCase() !== wordsArr[i].toUpperCase()){output.push(" ")}
  }
  console.log(output.join(""));
  return output.join("");
}