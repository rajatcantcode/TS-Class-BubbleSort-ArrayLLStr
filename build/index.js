"use strict";
class Sorter {
    constructor(arr) {
        this.arr = arr;
    }
    Sort() {
        // Number of turns
        for (let i = 1; i < this.arr.length; i++) {
            // Bubble Sort algo
            for (let j = 0; j < this.arr.length - 1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    // swap
                    let temp = this.arr[j];
                    this.arr[j] = this.arr[j + 1];
                    this.arr[j + 1] = temp;
                }
            }
        }
    }
}
let array = [1, 2, -20, -5, 5];
let sorter = new Sorter(array);
sorter.Sort();
console.log(sorter.arr);
