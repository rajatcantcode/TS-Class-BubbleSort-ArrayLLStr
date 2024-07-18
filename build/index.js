"use strict";
/* This is BAD CODE */
// Reason: If we want to add something extra, like sorting a linked list,
// we would need to include it in the union type. This would complicate the code.
// This code demonstrates a Sorter class that can handle both numbers and strings.
// However, it uses a type union and instanceof checks, which might be less ideal
// for complex sorting logic. Consider using separate sorter classes for numbers
// and strings for better maintainability.
class Sorter {
    constructor(arr) {
        this.arr = arr;
    }
    Sort() {
        // Number of elements in the array
        const length = this.arr.length;
        for (let i = 1; i < length; i++) {
            // Bubble Sort algorithm
            for (let j = 0; j < length - 1; j++) {
                // Check if the array is an actual array (for type safety)
                if (this.array instanceof Array) {
                    if (this.arr[j] > this.arr[j + 1]) {
                        // Swap elements (numbers)
                        let temp = this.arr[j];
                        this.arr[j] = this.arr[j + 1];
                        this.arr[j + 1] = temp;
                    }
                }
                else if (typeof this.arr === "string") {
                    // Convert string to character array for sorting
                    const charArray = this.arr.split("");
                    if (charArray[j] > charArray[j + 1]) {
                        // Swap elements (characters)
                        let temp = charArray[j];
                        charArray[j] = charArray[j + 1];
                        charArray[j + 1] = temp;
                        // Convert character array back to string
                        this.arr = charArray.join("");
                    }
                }
            }
        }
    }
}
let numberArray = [1, 2, -20, -5, 5];
let sorter = new Sorter(numberArray);
sorter.Sort();
console.log(sorter.arr); // Output: [-20, -5, 1, 2, 5]
let stringToSort = "bdca";
let stringSorter = new Sorter(stringToSort);
stringSorter.Sort();
console.log(stringSorter.arr); // Output: "abcd"
