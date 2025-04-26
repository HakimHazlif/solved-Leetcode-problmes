class Queue {
  constructor() {
    this.itmes = [];
  }

  enqueue(item) {
    return this.itmes.push(item);
  }

  dequeue() {
    return this.itmes.shift();
  }

  peek() {
    if (this.isEmpty) return 'Queue is empty'
    return this.itmes[0];
  }

  size() {
    return this.itmes.length;
  }

  isEmpty() {
    return this.itmes.length === 0;
  }
}