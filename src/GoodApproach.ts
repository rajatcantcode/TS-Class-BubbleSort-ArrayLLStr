import { NumbersCollection } from "./GoodApproach/NumbersCollection";
import { CharacterCollection } from "./GoodApproach/CharacterCollection";
import { LinkedList } from "./GoodApproach/LLCollection";

export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  Sort(): void {
    const { length } = this;

    for (let i = 1; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

const numArr = new NumbersCollection([5, 4, -2, 1, 0, 1, 3]);
// const sorter = new Sorter(numArr);
// sorter.Sort();
// console.log(numArr.data); // [-2, 0, 1, 1, 3, 4, 5]
numArr.Sort();
console.log(numArr.data); // [-2, 0, 1, 1, 3, 4, 5]

let str = new CharacterCollection("xDAbaladsa");
// let stringSorter = new Sorter(str);
// stringSorter.Sort();
// console.log(str.data); //AaaabDdlsx
str.Sort();
console.log(str.data); // AaaabDdlsx

const ll = new LinkedList();
ll.add(1);
ll.add(-2);
ll.add(300);
ll.add(-300);
// let llSorter = new Sorter(ll);
// llSorter.Sort();
// console.log(ll.print());
ll.Sort();
ll.print();

/*
-300 -> -2 -> 1 -> 300 -> null
*/
