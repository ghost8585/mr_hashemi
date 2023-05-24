import turtle as tu
Window=tu.Screen()
Window.title("GHOST.YT")
Window.setup(700,700)
def drawmazw(times=100,degree=90):
    for i in range(times):
        laki.fd(i)
        laki.left(degree)
inputnumber1=int(input("please enter times:"))
inputnumber2=int(input("please enter degree:"))
laki=tu.Turtle()
laki.speed(0)
drawmazw(inputnumber1,inputnumber2)
Window.exitonclick()

