Q1 Largest length in a sentence

function largestSentence(sentence){
    var answer = 0
  var sentenceArr = sentence.split(" ")
  for (var i = 0; i < sentenceArr.length; i++){
    if (sentenceArr[i].length > answer){
      answer = sentenceArr[i].length
    }
  }
  
  
  return answer
}

console.log(largestSentence("The quick brown fox jumped over the lazy dog"))


Q2 Largest Adjacent Product

function largestAdjacent(numbers){
  var answer = 0;
  for (var i = 0; i < 
numbers.length-1; i++){
    if ( numbers[i] * numbers[i+1]>
answer){
      answer = numbers[i] *
numbers[i+1];
    }
  }
      
      
    return answer
}

console.log(largestAdjacent([3,6,-2,-5,7,3]))
