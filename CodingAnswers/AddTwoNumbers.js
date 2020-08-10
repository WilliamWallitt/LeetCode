class ListNode {
    // each node has it's value (data) and the next node it points to (next)
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    // init LinkedList with the head (first pointer)
    constructor(head) {
        this.head = head
    }

    add(data) {
        // create node using the data
        const new_node = new ListNode(data)
        // if the head is null, set the head as the new node
        if (this.head === null) {
            this.head = new_node
        // otherwise we need to go through the nodes until we get to the end of the list
        } else {
            // iterate through nodes, until the node.next === null
            let current_node = this.head
            while(current_node.next !== null) {
                current_node = current_node.next
            }
            // then we can add it to the next node
            current_node.next = new_node
        }
    }
}

const addTwoNumbers = function(l1, l2) {

    let head1 = new LinkedList(null), head2 = new LinkedList(null), res = new LinkedList(null)
    for (let i = l1.length -1; i > -1; i--) {
        head1.add(l1[i])
        head2.add(l2[i])
    }
    let l1_list = head1.head
    let l2_list = head2.head
    let carry_the_one = 0
    while (true) {
        let sum = l2_list.data + l1_list.data
        if (sum > 9) {
            res.add(sum % 10 + carry_the_one)
            carry_the_one = Math.floor(sum / 10)
        } else {
            if (carry_the_one > 0) {
                sum = sum + carry_the_one
                carry_the_one = 0
            }
            res.add(sum)
        }
        if (l1_list.next === null || l2_list.next === null) {
            if (carry_the_one > 0) {
                res.add(carry_the_one)
            }
            break
        }
        l1_list = l1_list.next
        l2_list = l2_list.next
    }
    return res

}

let y = addTwoNumbers([5, 6, 7], [9, 2, 2])


