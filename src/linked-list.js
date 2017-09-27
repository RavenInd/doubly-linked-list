const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      if(this.length == 0){
        var node = new Node(data, null, null);
        this._head = node;
        this._tail = node;
      }
      else {
        var node = new Node(data, this._tail, null);
        this._tail.next = node
        this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {
      return this._head ? this._head.data : this._head;
    }

    tail() {
      return this._tail ? this._tail.data : this._tail;
    }

    at(index) {
      if(index < this.length){
        var currentNode = this._head;
        for(var i = 0; i < index; i++){
          currentNode = currentNode.next;
        }
        return currentNode.data;
      }
    }

    insertAt(index, data) {
      if(index < this.length){
        var prevNode = this._head;
        for(var i = 0; i < index - 1; i++){
          prevNode = prevNode.next;
        }
        var nextNode = prevNode.next;
        var node = new Node(data, prevNode, nextNode);
        prevNode.next = node;
        nextNode.prev = node;
        this.length++;
      } else if(index == this.length){
        this.append(data);
      }
      return this;
    }

    isEmpty() {
      if(this.length == 0) {
        return true;
      }
      return false;

    }

    clear() {
      this.length = 0;
      this._head = null;
      this._tail = null;
      return this;
    }

    deleteAt(index) {
      var prevNode = this._head;
        for(var i = 0; i < index - 1; i++){
          prevNode = prevNode.next;
        }
        if(index < this.length){
          if(this.length == 1){
            this.length = 0;
            this._head = null;
            this._tail = null;
            return this;
          }
          var nextNode = prevNode.next.next;
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          this.length--;
        } else if(index == this.length){
          prevNode.next = null;
          this._tail = prevNode;
          this.length--;
        }
      return this;
    }

    reverse() {
      var currentNode = this._head;
      for(var i = 0; i < this.length; i++){
        var x = currentNode.next;
        currentNode.next = currentNode.prev;
        currentNode.prev = x;
        currentNode = x;
      }
      var a = this._head;
      this._head = this._tail;
      this._tail = a;
      return this;
    }

    indexOf(data) {
      var currentNode = this._head;
      for(var i = 0; i < this.length; i++){
        if(currentNode.data == data){
          return i;
        }
        currentNode = currentNode.next;
      }
      return -1;
    }
}

module.exports = LinkedList;
