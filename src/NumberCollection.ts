import { Sortable,Sorter } from "./Sorter";

// export class NumberCollection implements Sortable{
export class NumberCollection extends Sorter{
  length: number;

  constructor(public data: number[]) {
    super()
    this.length = data.length;
  }

  // alternatively can use a getter. allows you to call length as prop not a method
  // get length() {
  //   return this.data.length;
  // }

  compare(leftIndex: number, rightIndex: number) {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const { data } = this;
    [data[leftIndex], data[rightIndex]] = [data[rightIndex], data[leftIndex]];
  }

}