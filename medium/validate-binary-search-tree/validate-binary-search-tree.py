# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode], min=None, max=None) -> bool:
        if root == None:
            return True
        val = root.val
        if min != None and val >= min:
            return False
        if max != None and val <= max:
            return False
        return self.isValidBST(root.left, val, max) and self.isValidBST(root.right, min, val)
