function merge(arr1, arr2) {
	const results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		}
		else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}

let arr1 = [ 1, 3, 4, 5 ];
let arr2 = [ 2, 4, 6, 8 ];
console.log(merge(arr1, arr2));
let arr3 = [ -2, -1, 0, 4, 5, 6 ];
let arr4 = [ -3, -2, -1, 2, 3, 5, 7, 8 ];

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
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

// module.exports = { merge, mergeSort };
