// 1.Display in the console the numbers from 1 to 20


function doSmth() {
    for (i = 1; i < 21; i++) {
        console.log(i);
    }

}
doSmth()

console.log('-----------^1^--------------')

// 2.Display in the console the odd numbers from 1 to 20

function number(){
for (i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}
}
number()

console.log('-------------^2^------------')


// 3.Compute the sum of the elements of an array and display it in the console

var element = [51, 43, 18, 49, 25, 12, -23, -23];

function sum(array) {
    var i = 0;
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log(sum(element));

console.log('------------^3^-------------')


// 4.Compute the maximum of the elements of an array and display it in the console 

var arr = [2, 7, 9, 11, 74, 7, 263, 976, 43];
var max = arr[0];

function maximum(array) {

    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    return max;
}
console.log(maximum(arr))

console.log('-------------^4^------------')


// 5.Compute how many times a certain element appears in an array

var numbers = [1, 6, 35, 1, 6, 0, 7, 2, 1, 6, 1, 324, 1, 76, 1];
var element = 1;

var count = function count(arr, element) {
    var c = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            c++;
        }
    }
    return c;
};

console.log(count(numbers, element));

console.log('------------^5^-------------')


