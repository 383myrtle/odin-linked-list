import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    if (this.size === 0) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    if (this.size === 0) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  at(index) {
    let n = 0;
    let pointer = this.head;
    while (pointer !== null) {
      if (n === index) {
        return pointer;
      }
      pointer = pointer.next;
      n++;
    }
  }

  pop() {
    let pointer = this.head;
    const node = this.tail;
    while (pointer !== null) {
      if (pointer.next === node) {
        pointer.next = null;
        this.tail = pointer;
      }
      pointer = pointer.next;
    }
    return node;
  }

  toString() {
    let pointer = this.head;
    let str = "";
    while (pointer !== null) {
      str = str + `(${pointer.value}) -> `;
      pointer = pointer.next;
    }
    str += "null";
    return str;
  }
}
