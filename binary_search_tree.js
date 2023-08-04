
/* 1.Create Binary Search Tree with given number 5,2,8,1,7,3,9.
   2.Insert number -3 and 11 to Binary search tree.
   3.Check the given integer n contains in the BST.
*/


class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }

    insert(data){
         if(data < this.data && this.left){
            this.left.insert(data);   /*call  recursive  insert() function*/
         }else if(data < this.data){
            this.left=new Node(data);
         }else if( data > this.data && this.right){
            this.right.insert(data);
         }else if(data > this.data){
            this.right=new Node(data);
         }
    }

    contains(data){
        if(data === this.data){
            return this.data;            /*return this; */
        }else if(data < this.data && this.left){
            return this.left.contains(data); /* call recursive contains() function */
        }else if(data > this.data && this.right){
            return this.right.contains(data);
        }
    }

}

let node=new Node(5);
node.insert(2);
node.insert(8);
node.insert(1);
node.insert(7);
node.insert(3);
node.insert(9);
node.insert(-3);
node.insert(11);
let integer=node.contains(2);
console.log("=======================================");
console.log(integer);
