const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	var node = {
        data: data,
        next: null,
        prev: null,
      }
      if (this.length === 0) {
						this._head = new Node(data, null, null);
            this._tail = new Node(data, this._head, null);
      } else {
      		if(this.length === 1){
      			this._head.next=node;
      		}
          this._tail.next = node;
          node.prev = this._tail;
          this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
    	var node = this._head;
      var i = 0;
      while (i != index) {
          node = node.next;
          i++;
      }
      return node.data;
    }

    insertAt(index, data) {
        var current = this._head;
        for(var i = 0; i < index - 1;i++)
          current = current.next;
        var node = new Node(data);
        node.previous = current;
        node.next = current.next;
        current.next = node;
        return this;
    }

    isEmpty() {
    	if(this.length)
        return false;
      else
        return true;
    }

    clear() {
    	  this._head = new Node();
        this._tail = new Node();
        this.length = 0;
        return this;
    }

    deleteAt(index) {
    	var node = this._head;
      var i = 0;
      while (i < index) {
          node = node.next;
          i++;
      }
      while (i != this.length - 1) {
          node.data = node.next.data;
          this._tail = node;
          node = node.next;
          i++;
      }
      node.data = null;
      node.next = null;
      this.length--;
      return this;
    }

    reverse() {
    	var node_buf = {
        data: null,
        next: null,
        prev: null,
       }

      var node_head = this._head;
      var node_tail = this._tail;

      var i = 0;

      while (i < Math.floor(this.length / 2)) { 
          node_buf.data = node_tail.data;
          node_tail.data = node_head.data;
          node_head.data = node_buf.data;
          node_head = node_head.next;
          node_tail = node_tail.prev;
          i++;
      }

        return this;
    }

    indexOf(data) {
    	var index = -1;
    	var node = this._head;
      var i = 0;
      while (i != this.length) {
        if (node.data == data) {
            return i;
        }
        node = node.next;
        i++;
    }
    return index;
}
}
module.exports = LinkedList;
