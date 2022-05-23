//String incrementer v1:
function incrementString (str) {
  const numRegEx = /[0-9]/;
  const array = str.split('');  
  const numArray = array.filter(x=>numRegEx.test(x));  //put numbers into an array
	const wordArray = array.filter(x=>!numRegEx.test(x));   //compare the number array to the original array and pull the word out
  numArray.unshift(1); //add a leading 1 to deal with leading zeroes in answer
  let worker = Number(numArray.join('')) //all this ridiculousness - turn the array into a number to increment and then...
  worker++
  const newNumArray = String(worker).split(''); //split the number back into an array
  newNumArray.shift(); //get rid of the leading 1
  
  let number = newNumArray.join('');
  if (number === '') { //if there's no number, make it 1
    number = 1;
  }
  
  
  let word = wordArray.join('').concat(number)//combine the word and the incremented number
  return word
}

function incrementString(str) {
  const array = str.split('');
  const numRegEx = /[0-9]/;
  const numArray = [];
  const wordArray = [];
  array.map(x=>{
    numRegEx.test(x) ? numArray.push(x) : wordArray.push(x);
  });
  let workingNum = Number(numArray.join(''))+1;
  if (numArray.length > String(workingNum).length) {
    count = workingStr.length - String(workingNum).length;
    console.log(count + ' old string is greater than new number');
  } else if (workingStr.length == String(workingNum).length) {
    console.log('old string is the same as new number');
  }
  let workingNumStr = String(workingNum).padStart(count, '0')
  let answer = wordArray.join('').concat(workingNumStr)
  return answer
}