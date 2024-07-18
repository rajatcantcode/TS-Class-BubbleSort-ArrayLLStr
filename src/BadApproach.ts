/* This is BAD CODE */
// Reason: If we want to add something extra, like sorting a linked list,
// we would need to include it in the union type. This would complicate the code.

/*
This code demonstrates a Sorter class that can handle both numbers and strings.
However, it uses a type union and instanceof checks, which might be less ideal
for complex sorting logic. Consider using separate sorter classes for numbers
and strings for better maintainability.
*/

class BadSorter {
  constructor(public arr: number[] | string) {}

  Sort(): void {
    // Number of turns
    const length = this.arr.length;
    for (let i = 1; i < length; i++) {
      // Bubble Sort algorithm
      for (let j = 0; j < length - 1; j++) {
        /* 

        This instanceof or typeof is a hack in TypeScript.
        Although using a union restricts us to using only the common methods
        between array and string, once TypeScript knows it's an instance of Array,
        it provides all the methods of Array.

        */

        // If arr is an array of numbers
        if (this.arr instanceof Array) {
          if (this.arr[j] > this.arr[j + 1]) {
            // Swap
            let temp = this.arr[j];
            this.arr[j] = this.arr[j + 1];
            this.arr[j + 1] = temp;
          }
        }

        // If arr is a string
        if (typeof this.arr === "string") {
          let arr = this.arr.split("");
          // [ 'b', 'd', 'c', 'a' ]
          if (arr[j] > arr[j + 1]) {
            // Swap
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            this.arr = arr.join("");
            // bcba
          }
        }
      }
    }
  }
}

let array: number[] = [1, 2, -20, -5, 5];
let sorter = new BadSorter(array);
sorter.Sort();
console.log(sorter.arr);

let str: string = "bdca";
let stringSorter = new BadSorter(str);
stringSorter.Sort();
console.log(stringSorter.arr);
