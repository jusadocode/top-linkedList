
const LinkedList = function() {

    let head = null;
    let tail = null;
    let size = 0;

    const append = function(value) {
        if(head === null) {
            head = Node(value);
            tail = head;
        }
        else {
            tail.next = Node(value);
            tail = tail.next;
        }
        size++; 
    }

    const prepend = function(value) {

        let newNode = Node(value);
        if(head === null) {
            head = newNode;
            tail = head;
        }
        else {
            newNode.next = head;
            head = newNode;
        }
        size++; 
    }

    const getHead = function() {
        return head;
    }

    const getTail = function() {
        return tail;
    }

    const getSize = function() {
        return size;
    }
    
    const at = function(index) {

        if(index >= size || index < 0)
            return null;

        let currNode = head;
        let i = 0;
        while(i < index) {
            currNode = currNode.next;
            i++;
        }

        return currNode;
    }

    const pop = function() {

        if(size === 1) {
            head = null;
            tail = null;
            size--;
            return;
        }

        let currNode = head;
        let i = 0;
        while(i < size - 2) {
            currNode = currNode.next;
            i++;
        }
        tail = currNode;
        tail.next = null;
        size--;
    }

    const insertAt = function(value, index) {

        const newNode = Node(value);
        if(index === 0) {
            newNode.next = head;
            head = newNode;
            size++;
            return;
        }

        // inserts at the end 
        if(index >= size) {
            append(value);
            return;
        }

        if(index < 0) {
            prepend(value);
            return;
        }

        let currNode = head;
        let prev = head.next;
        let i = 0;
        while(i < index) {
            prev = currNode;
            currNode = currNode.next;
            i++;
        }

        prev.next = newNode;
        newNode.next = currNode;
        size++;
        
    }

    const removeAt = function(index) {

        if(index === 0) {
            head = head.next;
            size--;
            return;
        }

        if(index < 0 || index >= size)
            return;

        let currNode = head.next;
        let prev = head;
        let i = 0;

        while(i < index - 1) {
            prev = currNode;
            currNode = currNode.next;
            i++;
        }

        prev.next = currNode.next;
        size--;
    }

    const contains = function(value) {

        let currNode = head;

        while(currNode) {
            if(currNode.val === value)
                return true;

            currNode = currNode.next;
        }

        return false;
    }

    const find = function(value) {

        let currNode = head;
        let i = 0;
        while(currNode) {
            if(currNode.val === value)
                return i;

            currNode = currNode.next;
            i++;
        }

        return null;
    }

    const toString = function() {
        let result = '';

        let currNode = head;
        while(currNode) {
            result += `( ${currNode.val} ) -> `;
            currNode = currNode.next;
        }
        result += '( null )'

        return result;
    }

    return {append, prepend, getSize, getHead, getTail, at, pop, contains, find, toString, insertAt, removeAt};

    
  
}

const Node = function(val, next) {
    val = val || null;
    next = next || null;
    return {val, next};
}

const linkedList = LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");
console.log(linkedList.toString()); // (test1) -> (test2) -> (test3) -> null
console.log(linkedList.getSize()); // 3
console.log(linkedList.getHead()); // return head Node
console.log(linkedList.getTail()); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(2)); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(4)); // There is no item for this index
linkedList.pop();
console.log(linkedList.toString()); // (test1) -> (test2) -> null
console.log(linkedList.contains("test1")); // true
console.log(linkedList.find("test2")); // 1
linkedList.prepend("test3");
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> null
linkedList.insertAt("test4",2);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> null
linkedList.insertAt("test5",8);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> (test5) -> null
linkedList.removeAt(2);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> (test5) -> null

