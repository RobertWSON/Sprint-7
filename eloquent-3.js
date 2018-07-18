
Exercise 1 - Minimum

// function that takes two arguments and returns a minimum value.
function min (a, b) {
    if (a < b)  {
        return a;
    } else {
        return b;
    }
}

console.log (min(0, 10));
//   0
console.log (min(0, -10));
//   -10



Exercise 2 - Recursion


// function that checks if a number is even or not.
function isEven(number) {
    var num = math.abs(number);    //convert to absolute value to account for negative numbers.
    if (num === 0)  {
        return true;
    }    
    else if (num === 1) {
        return false;
    }    
    else    {
        return isEven (num - 2);
    }    
}    



console.log (isEven(50));
//   true
console.log (isEven(75));
//   false
console.log (isEven(-1));
//   ??


Exercise 3 - Bean Counting


// function that takes one argument and returns a number that show how many uppercase "B" characters are in the string.
function countBs(string)    {
    let strCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B")   {
            strCount ++;
        }
    }
    return strCount;
}


// function that takes two arguments and returns a number that shows how many times a certain character appears in a string.
function countChar(string, char)    {
    let strCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char)   {
            strCount ++;
        }
    }
    return strCount;    
}


console.log (countBs("BBC"));
// 2
console.log (countChar("kakkerlak", "k"));
// 4
