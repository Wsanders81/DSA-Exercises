// add whatever parameters you deem necessary
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
function isSubsequence(str1, str2) {
	const str1Arr = str1.split('');
	const str2Arr = str2.split('');
	let str1Idx = 0;
	let str2Idx = 0;
	while (str2Idx <= str2Arr.length) {
		if (str1Idx >= str1Arr.length) return true;
		if (str2Arr[str2Idx] === str1Arr[str1Idx]) str1Idx++;
		str2Idx++;
	}
	return false;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)
