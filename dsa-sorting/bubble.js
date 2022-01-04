function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let swapped = false;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return arr;
}
let nums = [
	4,
	3,
	5,
	3,
	43,
	232,
	4,
	34,
	232,
	32,
	4,
	35,
	34,
	23,
	2,
	453,
	546,
	75,
	67,
	4342,
	32
];
console.log(bubbleSort([ 4, 20, 12, 10, 7, 9 ]));
// module.exports = bubbleSort;
