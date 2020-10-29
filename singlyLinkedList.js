//single linked list

//creating a single node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//creating a linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //adding an element to the last
  appendLast = (data) => {
    const node = new Node(data);
    let current = this.head;
    if (!this.head) {
      this.head = node;
      this.size++;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
    return node;
  };
  //appending elements at the starting
  appendFirst = (data) => {
    const node = new Node(data);
    let current = this.head;
    //if the head is null then assign node to the head
    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      this.head = node;
      this.head.next = current;
      this.size++;
    }
    return node;
  };

  // appending at perticular index
  appendAt = (data, index) => {
    const node = new Node(data);
    let current = this.head;
    let previous;
    if (this.head === null) {
      this.head = node;
      return;
    }

    if (index === 0) {
      this.head = node;
      this.head.next = current;
      return;
    }
    previous = this.getAt(index - 1);
    node.next = previous.next;
    previous.next = node;
    return this.head;
  };

  // deleteing the last node
  removeLast = () => {
    let count = 0;
    let current = this.head;
    while (current.next) {
      current = current.next;
      count++;
    }
    let newNode = this.getAt(count - 1);
    newNode.next = null;
    this.size -= 1;
    return this.head;
  };

  //removing the first element
  removeFirst = () => {
    let newNode = this.getAt(1);
    this.head = newNode;
    this.size -= 1;
    return this.head;
  };

  //remove from a perticular index
  removeAt = (index) => {
    let node, previousNode;
    if (this.head === null) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
    } else {
      node = this.getAt(index);
      previousNode = this.getAt(index - 1);
      previousNode.next = node.next;
    }
    return this.head;
  };

  //remove all
  removeAll = () => {
    this.size = 0;
    return (this.head = null);
  };

  //getting the linked list
  get = () => {
    this.size = 0;
    return this.head;
  };

  //get a perticular index
  getAt = (index) => {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
      this.size -= 1;
    }
    return null;
  };
  //getting all the data of linked list
  getData = () => {
    let data = [];
    let current = this.head;
    while (current) {
      data.push(current.data);
      current = current.next;
    }
    return data;
  };
  //get all unique data from the linked list
  getUniqueData = () => {
    let data = this.getData();
    const set = new Set(data);
    let uniqueData = Array.from(set);
    return uniqueData;
  };

  //getting the size of the linked list.
  size = () => {
    return this.size;
  };
}
