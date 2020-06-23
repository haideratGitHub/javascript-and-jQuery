// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // const reverseString = str.split('');
    // reverseString.reverse();
    // return reverseString.join('');

    //////////////////////////

    // let revString = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;

    /////////////////////////

    // let revString = '';
    // for(let i = 0; i <= str.length - 1; i++) {
    //   revString = str[i] + revString;
    // }
    // return revString;

    ////////////////////////

    // let revString = '';
    // for(let char of str) {
    //   revString = char + revString;
    // }
    // return revString;

    ///////////////////////

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);
    // return revString;

    //////////////////////


    //let arr = [...str];
    //let newArr = arr.map((_, i, arr) => {
    //     return arr[arr.length - 1 - i];
    //   });
    //return newArr.join("");



    return str.split('').reduce((revString, char) => char + revString, '');
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const reverseString = str.split('').reverse().join('');
    return reverseString == str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const reverseString = int.toString().split('').reverse().join(''); //we are changing int to string and doing exact same to reverse
    return parseInt(reverseString) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    const strArr = str.toLowerCase().split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
            strArr[i].substring(1);
    }
    return strArr.join(' ');

    /////////////////////////////

    // return str
    //   .toLowerCase()
    //   .split(' ')
    //   .map(word => word[0].toUpperCase() + word.substr(1))
    //   .join(' ');

    /////////////////////////////

    // return str.replace(/\b[a-z]/gi, function (char) {
    //     return char.toUpperCase();
    // });
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
  
    str.split('').forEach(function(char) {
      if(charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    });
  
    for(let char in charMap) {
      // debugger;
      if(charMap[char] > maxNum) {
        maxNum = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  
  
    // Here is my version of the algorithm.
    // I put the string into an array and I sort it.
    // Then I loop through the array keeping track of the count for each character.
    // I keep track of the "current character" and the "max character" with objects.
  
    // const sortedStr = str.split('').sort();
    // const maxChar = {char: '', count: 0};
    // const currentChar = {char: '', count: 0};
  
    // sortedStr.forEach(char => {
    //   if(currentChar.char === char){
    //     currentChar.count++;
    //   } else {
    //     if(maxChar.count < currentChar.count){
    //       maxChar.char = currentChar.char;
    //       maxChar.count = currentChar.count;
    //     }
    //     currentChar.char = char;
    //     currentChar.count = 0;
    //   }
    // });
  
    // return maxChar.char;
 }



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz');
        }
        else if(i % 3 == 0){
            console.log('Fizz');
        }
        else if(i % 5 == 0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }

 }



//const output = reverseString("hello");
//console.log(output);

//const output = isPalindrome("racecar");
//console.log(output);

//const output = reverseInt(12345);
//console.log(output);

//const output = capitalizeLetters("i am haider");
//console.log(output);

//const output = maxCharacter("javascript");
//console.log(output);

//fizzBuzz();