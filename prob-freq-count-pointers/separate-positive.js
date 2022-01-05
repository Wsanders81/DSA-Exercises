// add w
// Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).hatever parameters you deem necessary
function separatePositive(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		if (arr[left] < 0 && arr[right] > 0) {
			const temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
			left++;
			right--;
		}
		else {
			if (arr[left] > 0) left++;
			else right--;
		}
	}
	return arr;
}

// console.log(separatePositive([ 2, -1, -3, 6, -8, 10 ])); // [2, 10, 6, -3, -1, -8]
// console.log(separatePositive([ 5, 10, -15, 20, 25 ])); // [5, 10, 25, 20, -15]
// console.log(separatePositive([ -5, 5 ])); // [5, -5]
// console.log(separatePositive([ 1, 2, 3 ])); // [1, 2, 3]
