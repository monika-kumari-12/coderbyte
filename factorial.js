// Challenge
// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
// Sample Test Cases
// Input:4

// Output:24

// Input:8

// Output:40320

//4!= 4 * 3!
//3!=3* 2!
//2!=2 *1

function FirstFactorial(num) {
	if (num < 0) return -1;
	else if (num === 0 || num === 1) {
		return 1;
	} else {
		return num * FirstFactorial(num - 1);
	}
}
console.log(FirstFactorial(-23));
console.log(FirstFactorial(0));

console.log(FirstFactorial(1));

console.log(FirstFactorial(8));
