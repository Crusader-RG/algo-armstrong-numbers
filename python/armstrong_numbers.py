# How can you make this more scalable and reusable later?
def find_armstrong_numbers(numbers):
    ans_list = []
    for n in range(numbers + 1):
        jNum = 0
        lst = [int(i) for i in str(n)]
        for j in lst:
            jNum += (j ** len(lst))
        if n == jNum:
            ans_list.append(n)    
    return ans_list   

print(find_armstrong_numbers(0))