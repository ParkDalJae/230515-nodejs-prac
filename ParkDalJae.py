# # 정수인지 판단하는 내장 메서드를 절차형으로 표현
# # type(a)
# a = 1

# if type(a) == int:
#     o = "정수입니다."
# else:
#     o = "정수가 아닙니다."


# print(o)
def exampleOne(a):
    if type(a) == int:
        o = "정수입니다."
    else:
        o = "정수가 아닙니다."
    print(o)


a = 10
exampleOne(a)
