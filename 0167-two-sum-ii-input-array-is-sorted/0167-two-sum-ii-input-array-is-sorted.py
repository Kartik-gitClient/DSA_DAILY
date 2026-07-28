class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        Lptr = 0
        Rptr = len(numbers) - 1

        # for i in range(len(numbers)):
        while Lptr < Rptr:
            # print(i)

            if(numbers[Lptr] + numbers[Rptr] == target):
                return [Lptr + 1 , Rptr + 1]
            if(numbers[Lptr] + numbers[Rptr] > target):
                Rptr -=1
            if(numbers[Lptr] + numbers[Rptr] < target):
                Lptr +=1
            

        