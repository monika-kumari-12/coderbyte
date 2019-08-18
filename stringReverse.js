// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Sample Test Cases
// Input:"coderbyte"

// Output:etybredoc

// Input:"I Love Code"

// Output:edoC evoL I

function FirstReverse(str) {
	var reverse = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reverse = reverse + str.charAt(i);
	}
	return reverse;
}

console.log(FirstReverse('I Love Code'));
console.log(FirstReverse('coderbyte'));

function FirstReversee(str) {
	return str
		.split('')
		.reverse()
		.join('');
}
console.log(FirstReversee('I Love Code'));
console.log(FirstReversee('coderbyte'));
