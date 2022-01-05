// add whatever parameters you deem necessary
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
function averagePair(arr, target) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		const sum = (arr[left] + arr[right]) / 2;
		if (sum === target) return true;
		if (sum > target) {
			right--;
		}
		else left++;
	}
	return false;
}
