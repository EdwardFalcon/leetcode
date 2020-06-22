# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        newHead = head
        while head and head.next:
            tmp = head.next
            head.next = tmp.next
            tmp.next = newHead
            newHead = tmp
        return newHead                             