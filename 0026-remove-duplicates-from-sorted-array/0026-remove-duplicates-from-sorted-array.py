class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0: return 0
        if len(nums) == 1: return nums[0]
        if len(nums) == 2 and nums[0] == nums[1]: return nums[0]
        Lptr = 1
        Rptr = Lptr

        for Rptr in range(1,len(nums)):
        #    DURING THE 1ST DRY RUN THE CONDITION IS : 
        #  -1 != UNDEFINED , SO THE LEFT POINTER NATURALLY GETS L++ , AND GETS TO 2ND ELEMENT !!
            if(nums[Rptr] != nums[Rptr - 1]):
                nums[Lptr] =  nums[Rptr]
                Lptr = Lptr + 1   
            else:
                Rptr+=1         

        print(nums)
        
        return Lptr 
        
    

            

        