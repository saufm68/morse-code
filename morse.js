var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

// var input = prompt("Enter a word or a sentence");
// var inputEdited = input.toLowerCase();
var alphabetKeys = Object.keys(alphabet);

var convertMessage = function(user) {

    var inputArray = user.split("");
    var morseArray = [];
    var sentence = "";

    for (var i = 0; i < inputArray.length; i++) {


         for (var j = 0; j < alphabetKeys.length; j++) {

            if (inputArray[i] === alphabetKeys[j]) {

                morseArray.push(alphabet[alphabetKeys[j]]);

            }

         }

         if (inputArray[i] === " ") {

                morseArray.push(" ");
            }

    }

    for (var i = 0; i < morseArray.length; i++) {

        sentence = sentence + morseArray[i] + " " ;
    }

    return sentence;
}


// console.log(convertMessage(inputEdited));

var morseToDecode = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. ."
var morseToDecodeArray = morseToDecode.split(" ");
console.log(morseToDecodeArray)

var decode = function(morse) {

    var sentenceArray = [];
    var sentence = " ";

    for (var i = 0; i < morseToDecodeArray.length; i++) {

        for (var j = 0; j < alphabetKeys.length; j++) {

            if (morseToDecodeArray[i] === alphabet[alphabetKeys[j]]) {

                sentenceArray.push(alphabetKeys[j]);
            }

        }

        if (morseToDecodeArray[i] === "") {

            sentenceArray.push(" ");

        }

    }

    for (var i = 0; i < sentenceArray.length; i++) {

    sentence = sentence + sentenceArray[i];

    }

    return sentence;
}

console.log(decode(morseToDecode));




