class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        xorhelp = 0
        
        for i in range(n):
            current_num = start + 2 * i
            xorhelp = xorhelp ^ current_num
            
        return xorhelp
