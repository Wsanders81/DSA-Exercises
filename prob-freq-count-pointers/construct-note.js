// add whatever parameters you deem necessary
function makeFreqCounter(str) {
	const strArr = str.split('');
	const freqCounter = {};
	for (let letter of strArr) {
		freqCounter[letter] = freqCounter[letter] + 1 || 1;
	}
	return freqCounter;
}
function constructNote(str1, str2) {
	if (str1.length > str2.length) return false;

	const str1Freq = makeFreqCounter(str1);
	const str2Freq = makeFreqCounter(str2);
	for (let key in str1Freq) {
		if (!str2Freq[key]) return false;

		if (str1Freq[key] > str2Freq[key]) return false;
	}
	return true;
}
