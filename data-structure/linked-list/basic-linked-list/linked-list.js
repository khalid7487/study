class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// linkedlist class 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Adds an element at the end of the list
    add(element) {
        let node = new Node(element);

        let current;

        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;

            //iterate to the end of the list 
            while (current.next) {
                current = current.next;
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }


    // insert element at the index postion
    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.")
        else {
            // creates a new node 
            let node = new Node(element);
            let current, previous;

            current = this.head;

            // Add the element to first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                current = this.head;
                let it = 0; //here it is iteration value 

                // iterate over the list to find the position to insert
                while (it < index) {
                    it++;
                    previous = current;
                    current = current.next;
                }

                // adding an element 
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }

    // removes an element from the specified location
    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            let current, previous, it = 0;
            current = this.head;
            previous = current;

            // deleting first element
            if (index == 0) {
                this.head = current.next;
            } else {
                // iterate over the list to the position to remove an element
                while (it < index) {
                    it++;
                    previous = current;
                    current = current.next;
                }

                // remove the element 
                previous.next = current.next;
            }
            this.size--;

            // return the remove element
            return current.element;

        }
    }

    // Removes a given element from the list 
    removeElement(element){
        let current = this.head;
        let previous=null;

        // iterate over the list
        while(current != null){
            // comparing element with current element if found 
            // then remove the and return true
            if(current.element === element){
                if(previous == null){
                    this.head = current.next;
                }else{
                    previous.next = current.next;
                }
                this.size--;
                return current.element;
            }
            previous =current;
            current = current.next;
        }
        return -1;
    }


    // finds the index of element
    indexOf(element){
        let count =0;
        let current = this.head;

        // iterate over the list
        while(current != null){
            // compare each element of the list with given element 
            if(current.element === element)
                return count;
            count++;
            current= current.next;
        }
        // not found
        return -1;
    }
    
    // check list is empty or not
    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list 
    size_of_list(){
        console.log(this.size);
    }

    // prints the list items
    printList(){
        let current = this.head;
        let str = "";

        while(current){
            str += current.element + " ";
            current = current.next;
        }
        console.log(str);
    }

}



// Likedlist class
let ll = new LinkedList();

// testing isempty list
console.log(ll.isEmpty())

// adding element to the list
ll.add(10);
ll.add(11);

// prints
ll.printList();

// return 1
ll.size_of_list();

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

console.log("Index of 40: ", ll.indexOf(40));


ll.indexOf(60, 2);

ll.printList();

console.log("Is List empty: " + ll.isEmpty());

console.log(ll.removeFrom(3));

ll.printList();