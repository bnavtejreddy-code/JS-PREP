#OOps
class BankAccount:
    def __init__(self, acc_holder,balance):
        self.acc_holder = acc_holder
        self.balance = balance

    def deposit(self,amt):
        self.balance+=amt

    def withdraw(self,amt):
        if(self.balance>=amt):
            self.balance-=amt
        else:
            print("Insufficient balance")

    def display_balance(self):
        return self.balance

account1 = BankAccount("Navtej",1000)
account1.deposit(500)
account1.withdraw(100)
print(account1.display_balance())


class Animal():
    def __init__(self):
        pass
    def speak(self):
        print("Hello I am an animal")

class Dog(Animal):
    def __init__(self):
        Animal.__init__(self)

    def speak(self):
        print("WOOF")

class Cat(Animal):
    def __init__(self):
        Animal.__init__(self)

    def speak(self):
        print("MEOWW")


    