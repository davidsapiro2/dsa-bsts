import { BNode, BNodeNum, BSTNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {
  if (bst.root === null) {
    const newNode = new BNode(val);
    bst.root = newNode;
  } else {
    _insert(bst.root, val);
  }

  function _insert(node: BNodeNum, val: number): void {
    if (val < node.val) {
      if (node.left === null) {
        node.left = new BNodeNum(val);
      } else {
        _insert(node.left, val);
      }
    } else {
      if (node.right === null) {
        node.right = new BNodeNum(val);
      } else {
        _insert(node.right, val);
      }
    }
  }
}

export { insertRecur };

