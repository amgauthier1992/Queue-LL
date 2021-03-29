class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //view first item in queue
  peek(){
    return this.first;
  }

  //add item to queue - push to end of line
  enqueue(value){
    const newNode = new _Node(value);

    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    } 
    else {
      //newNode comes after our old last item
      this.last.next = newNode;
      //newNode is now our last item
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  //remove item from queue - remove from beginning
  dequeue(){
    //queue is empty, nothing to dequeue
    if(!this.first){
      return null;
    }

    //remove last node if length is 0 (similar to what we did with Stack)
    if(this.first === this.last){
      this.last = null;
    }

    this.first = this.first.next;

    this.length--;
    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue('Google');
myQueue.enqueue('Amazon');
myQueue.enqueue('Microsoft');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);
