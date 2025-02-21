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
}
