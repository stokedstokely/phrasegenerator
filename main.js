const adjectiveSpan = document.getElementById("adjective"),
nounSpan = document.getElementById("noun"),
verbSpan = document.getElementById("verb"),
generateWord = document.getElementById("generateWord"),
generateWordAll = document.getElementsByClassName("gen-Word-Btn"),
noVowelsBtn = document.getElementById("noVowelsBtn"),
addRBtn = document.getElementById("addRBtn"),
resetBtn = document.getElementById("resetBtn")
clearBtn = document.getElementById("clearBtn");
////////

resetBtn.addEventListener("click",function() {
  reset();
})
clearBtn.addEventListener("click", function() {
  clear();
})
noVowelsBtn.addEventListener("click", function() {
  noVowels();
})
addRBtn.addEventListener("click",function() {
  addR();
})
function readSingleFile(file) {
  return new Promise(function(resolve,reject) {
    var arrContents;
    var objXMLhttp = new XMLHttpRequest()
    objXMLhttp.open("GET", file, true);
    objXMLhttp.send();
    objXMLhttp.onreadystatechange = function(){
          if (objXMLhttp.readyState == 4){
            if(objXMLhttp.status == 200) {
                arrContents = objXMLhttp.responseText.split("\n"); 
                resolve(arrContents)
            } else {
                console.log("error");
            }
          }
        }  
    })
}
for (var i = 0 ; i < generateWordAll.length; i++) {
  generateWordAll[i].addEventListener('click', function() {
    let text = this.innerText
    switch (text) {
      case "Generate All Three":
        getWord(1,1,1);
      return
      case "Generate Verb":
        getWord(1,0,0);
      return
      case "Generate Adjective":
        getWord(0,1,0);
      return
      case "Generate Noun":
        getWord(0,0,1);
      return
    }
  });
}
function random(max,min) {
  let rng = Math.floor(Math.random() * (max - min + 1)) + min;
  return rng
}


function getWord(verb,adj,noun) {
  if (verb === 1) {
    readSingleFile('dicts/verbs.txt')
        .then(function(array){
          var arrIndex = random(0,array.length-1)
          var word = array[arrIndex]
          verbSpan.innerText=word
    })
  }
  if (adj === 1) {
    readSingleFile('dicts/english-adjectives.txt')
        .then(function(array){
          var arrIndex = random(0,array.length-1)
          var word = array[arrIndex]
          adjectiveSpan.innerText=word
    })
  }
  if (noun === 1) {
    readSingleFile('dicts/english-nouns.txt')
        .then(function(array){    
          var arrIndex = random(0,array.length-1)
          var word = array[arrIndex]
          nounSpan.innerText=word
   })
  }
}
function clear() {
  verbSpan.innerText="";
  adjectiveSpan.innerText="";
  nounSpan.innerText="";
}
function addR() {  
  let verb = verbSpan.innerText;
  let adjective = adjectiveSpan.innerText;
  let noun = nounSpan.innerText;
  if (verb != "") {
    verb = verb+"r";
  }
  if (adjective != "") {
    adjective = adjective+"r";
  }
  if (noun != "") {
    noun = noun+"r";
  }
  verbSpan.innerText = verb;
  adjectiveSpan.innerText = adjective;
  nounSpan.innerText = noun;
}

function noVowels() {
  let verb = verbSpan.innerText;
  let adjective = adjectiveSpan.innerText;
  let noun = nounSpan.innerText;
  words.noun = noun;
  words.adjective = adjective;
  words.verb = verb;
  let verbNew = verb.replace(/[aeiou]/ig,'');
  let adjectiveNew = adjective.replace(/[aeiou]/ig,'');
  let nounNew = noun.replace(/[aeiou]/ig,'');
  verbSpan.innerText = verbNew;
  adjectiveSpan.innerText = nounNew;
  nounSpan.innerText = noun;

}
function reset() {
  verbSpan.innerText = words.verb;
  adjectiveSpan.innerText = words.adjective;
  nounSpan.innerText = words.noun;
}
let words = {
  noun: "",
  adjective: "",
  verb: "",
}