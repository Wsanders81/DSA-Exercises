
// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted
// numbers and an integer. The function should return the index of num in the array. If the value is not 
// found, return -1.

// Constraints:

// Time Complexity: O(log N)


function divideAndConquer(arr, num, leftIdx, rightIdx){
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        let middleVal = arr[middleIdx]
        if(middleVal > num){
            rightIdx = middleIdx - 1
        } else if(middleVal < num){
            leftIdx = middleIdx + 1
        } else return middleIdx
    }
    return -1
}

function findRotatedIndex(arr, num) {
  let leftIdx; 
  let rightIdx; 
  let middleIdx = Math.floor((arr.length -1 )/ 2)
  if(arr[middleIdx] > arr[middleIdx + 1] && arr[0] > num){
    leftIdx = middleIdx + 1
    rightIdx = arr.length - 1; 
    return divideAndConquer(arr, num, leftIdx, rightIdx)
  } 
  if(arr[middleIdx] > arr[middleIdx + 1] && arr[0] <= num  ){
      
      leftIdx = 0
      rightIdx = middleIdx
      return divideAndConquer(arr, num, leftIdx, rightIdx)
  } 
  
  
  return -1

  
}

// console.log(findRotatedIndex([3,4,1,2],4)) // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6 
// console.log(findRotatedIndex([37,44,66,102,10,22],14)) // -1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1

//??? Solution

// function findRotatedIndex(array, num) {
//     var pivot = findPivot(array)
//     if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
//       return binarySearch(array, num, 0, pivot - 1);
//     } else {
//       return binarySearch(array, num, pivot, array.length - 1);
//     }
//   }
  
//   function binarySearch(array, num, start, end) {
//     if (array.length === 0) return -1;
//     if (num < array[start] || num > array[end]) return -1;
  
//     while (start <= end) {
//       var mid = Math.floor((start + end) / 2);
//       if (array[mid] === num) {
//         return mid;
//       } else if (num < array[mid]) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//     return -1;
//   }
  
//   function findPivot(arr) {
//     if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
//     var start = 0
//     var end = arr.length - 1;
//     while (start <= end) {
//       var mid = Math.floor((start + end) / 2);
//       if (arr[mid] > arr[mid + 1]) return mid + 1
//       else if (arr[start] <= arr[mid]) {
//         start = mid + 1
//       } else {
//         end = mid - 1
//       }
//     }
//   }
  

module.exports = findRotatedIndex