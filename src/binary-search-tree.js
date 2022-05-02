const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.treeRoot = null;
  }
  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
   
   return this.treeRoot;
   
  }

  add (data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.treeRoot = addNode(this.treeRoot, data);

    function addNode(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data >  node.data){
        node.right = addNode(node.right, data);
      }else{
        node.left = addNode(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return locatedInTree(this.treeRoot, data);

    function locatedInTree(node, data){
      if(!node){
        return false;
      }

      if(node.data === data){
        return true;
      }

      if(data < node.data){
        return locatedInTree(node.left, data);
      }else{
        return locatedInTree(node.right, data);
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchInTree(this.treeRoot, data);

    function searchInTree(node, data){
      if(!node){
        return null;
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        return searchInTree(node.left, data);
      }else{
        return searchInTree(node.right, data);
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data){
      if(!node){
        return null;
      }

      if( data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }else if( data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      }else{
        if(!node.left && !node.right){
          return null;
        }

        if(!node.left){
          node = node.right;
          return node;
        }

        if(!node.right){
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left){
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.treeRoot){
      return null;
    }
    

    let node = this.treeRoot;
    while(node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.treeRoot){
      return null;
    }

    let node = this.treeRoot;
    while(node.right){
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};