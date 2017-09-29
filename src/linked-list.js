const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	var node = {
        value: value,
        next: null,
        prev: null,
      }
      if (this.length == 0) {
          this._head = node;
          this._tail = node;
      } else {
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
      return node;
    }

    insertAt(index, data) {
    	var node = {
        value: value,
        next: null,
        prev: null,
      }

      var nodeCur = this._at(index);
      var nodePrev = nodeCur.prev;
      var nodeNext = nodeCur.next;

      node.prev = nodePrev;
      node.next = nodeNext;
      nodePrev.next = node;
      nodeNext.prev = node;

      this.length++;

      return this;
    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {
    	var node = this._head;
      var i = 0;
      while (i < index) {
          node = node.next;
          i++;
      }
      while (i != this.length - 1) {
          node.value = node.next.value;
          this._tail = node;
          node = node.next;
          i++;
      }
      node.value = null;
      node.next = null;
      this.length--;
      return this;
    }

    reverse() {
    	var node_buf = {
        value: null,
        next: null,
        prev: null,
       }

      var node_head = this._head;
      var node_tail = this._tail;

      var i = 0;

      while (i < Math.floor(this.length / 2)) { 
          node_buf.value = node_tail.value;
          node_tail.value = node_head.value;
          node_head.value = node_buf.value;
          node_head = node_head.next;
          node_tail = node_tail.prev;
          i++;
      }

        return this;
    }

    indexOf(data) {
    	var node = this._head;
      var i = 0;
      while (i != this.length) {
        if (node.data == data) {
            return i;
        }
        node = node.next;
        i++;
    }
}

module.exports = LinkedList;
