// Challenge
// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
// Sample Test Cases
// Input:"hello*3"

// Output:Ifmmp*3

// Input:"fun times!"

// Output:gvO Ujnft
function LetterChanges(str) {
	let reverse = '';
	let valid = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	for (let i = 0; i < str.length; i++) {
		if (valid.includes(str[i])) {
			let char = str.charCodeAt(i);

			reverse +=
				str[i] === 'z' || str[i] === 'Z'
					? String.fromCharCode(char - 25)
					: String.fromCharCode(char + 1);
		} else {
			//for invalid characters
			reverse += str[i];
		}
	}

	let vowels = 'aeiou';
	let finalreverse = '';
	for (let i = 0; i < reverse.length; i++) {
		if (vowels.includes(reverse[i])) {
			finalreverse += reverse[i].toUpperCase();
		} else {
			finalreverse += reverse[i];
		}
	}

	return finalreverse;
}

console.log(LetterChanges('hello*3'));
console.log(LetterChanges('fun times!'));
