class LinkedList {
  constructor() {
  	this.nodes = [];
  }
  get size() {
  	return this.nodes.length;
  }
  get head() {
    return this.size? this.nodes[0] : null
  }
  get tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }
  insertAt(index, value) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index] || null;
    const node = { value, next: nextNode};

    if (previousNode) previousNode.next = node;
    this.nodes.splice(index, 0, node);
  }

  insertFirst(value) {
    this.insertAt(0, value);
  }
  innerLast(value) {
    this.insertAt(this.size, value);
  }
  getAt(index) {
    return this.nodes[index]
  }
  removeAt(index) {
    const previousNode = this.nodes[index - 1];
    const nextNode = this.nodes[index + 1] || null;

    if (previousNode) previousNode.next = nextNode;

    return this.nodes.splice(index, 1);
  }

  clear() {
    this.nodes = [];
  }

  reverse() {
    this.nodes = this.nodes.reduce(
      (acc, { value }) => [{ value, next: acc[0] || null}, ...acc],
      []
    );
  }
  *[Symbol.iterator]() {
    yield* this.nodes;
  }  
}


// How to use 
const list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.oinsertAt(3, 5);

list.size;
list.head.value;
list.head.next.value;
list.tail.value;
[...list.map(e => e.value)];

list.removeAt(1);
list.getAt(1).value;
list.head.next.value;
[...list.map(e => e.value)];

list.reverse();
[...list.map(e => e.value)];

list.reverse();
[...list.map(e => e.value)];

list.clear();
list.size;