const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  node = l;
  arr = [];
  while(node) {
    if(node.value !== k){
      arr.push(node);
    }
    
    node = node.next
  }

  for(let i = 0; i < arr.length - 1; i++ ){
    arr[i].next = arr[i + 1];
  }
  arr[arr.length - 1].next = null;

  return arr[0];
}



module.exports = {
  removeKFromList
};
