// Challenge
// Have the function LetterCapitalize(str) take the str parameter
// being passed and capitalize the first letter of each word. Words
// will be separated by only one space.
// Sample Test Cases
// Input:"hello world"

// Output:Hello World

// Input:"i ran there"

// Output:I Ran There

function LetterCapitalize(str) {
	//cant use new as its a keyword
	var neww = '';
	for (let i = 0, newWord = true; i < str.length; i++) {
		if (newWord) {
			neww += str[i].toUpperCase();
		} else {
			neww += str[i];
		}
		neww = str[i] === '' ? true : false;
	}
	return neww;
}
console.log(LetterCapitalize('hello world'));
