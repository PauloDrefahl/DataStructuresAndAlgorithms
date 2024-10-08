/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    p1 = head
    p2 = head

    while(p2 && p2.next){
        p1 = p1.next
        p2 = p2.next.next
        if(p1 === p2){
            return true;
        }
    }

    return false;
};