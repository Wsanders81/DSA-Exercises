// add whatever parameters you deem necessary
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
function makeFreqCount(num) {
	const freqCount = {};
	const numArr = num.toString().split('');
	for (num of numArr) {
		freqCount[num] = freqCount[num] + 1 || 1;
	}
	return freqCount;
}
function sameFrequency(int1, int2) {
	if (int1.toString().length !== int2.toString().length) return false;
	const int1Freq = makeFreqCount(int1);
	const int2Freq = makeFreqCount(int2);
	for (let key in int1Freq) {
		if (int1Freq[key] !== int2Freq[key]) return false;
	}
	return true;
}
