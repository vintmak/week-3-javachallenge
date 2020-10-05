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



Q3 Transform hour to military format

function transformMilitary(timeString){
  if (timeString.charAt(8)== "A"){
    if (timeString.substring(0,2) == "12"){
      return "00"+timeString.substring(2,8);
    }
    else {
      return timeString.substring(0,8)
    }
  }
  else {
    if (timeString.substring(0,2) == "12"){
      return timeString.substring(0,8)
    }
  }
    else {
      if (timeString.substring(0,2) == "12"){
        return timeString.substring(0,8) 
      }
      else {
        return               (parseInt(timeString.substring(0,2))+12)+timeString.substring(2,8)
    }
  }
}

console.log(transformMilitary("07:45:15AM"))
console.log(transformMilitary("07:45:15PM"))
console.log(transformMilitary("12:45:15AM"))
console.log(transformMilitary("12:45:15PM"))
