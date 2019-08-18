// Challenge
// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
// Sample Test Cases
// Input:"fun&!! time"

// Output:time

// Input:"I love dogs"

// Output:love

function longestWord(sen) {
	let validChars =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
	let max = 0;
	let longest = '';

	//length will be length of longest word found in that particular iteration
	//word will have that longest word found in that interation
	/*one the iteration finishes it will be compared with longest word and if the current word is longer than longest word , longest word will be updated to current word aand so on.*/

	for (let i = 0, length = 0, word = ''; i < sen.length; i++) {
		let c = sen[i];
		if (validChars.includes(c)) {
			length++;
			word += c;
		} else {
			length = 0;
			word = '';
		}

		if (length > max) {
			max = length;
			longest = word;
		}
	}
	return longest;
}

console.log(longestWord('fun&!! time'));
console.log(longestWord('I love dogs'));
