//Create a BankAccount constructor function that takes a user's name and balance. Add a method called deposit(amount) that increases the balance and logs the new balance, 
// and another method withdraw(amount) that decreases the balance only if there are enough funds. Create 3 user accounts and simulate deposits and withdrawals.


//create a function constructor that takes in two attributes; name and balance
//The function has two methods; deposit- increases the balance by the amount deposited, 
// withdraw- reduces the balance by the amt withdrawn only if there are enough funds in the account,
// if amount being withdrawn is less than available blanace it returns invalid amount
function BankAccount(name,balance){
    this.name=name;
    this.balance=balance;
    this.deposit= function(amountDeposited){
        this.balance += amountDeposited;
        return `Deposit is ${amountDeposited}, and balance is ${this.balance}`;
    }
    this.withdraw=function(amountWithdrawn){
        if (amountWithdrawn >0 && amountWithdrawn<= this.balance){
            this.balance -= amountWithdrawn;
        return`Withdrawal is ${amountWithdrawn}, and balance is ${this.balance}`;
        }else{
        return"Invalid amount, Please try a lower amount";
        }
        
    }
}
const account1 = new BankAccount("Anna",1200);
console.log(account1);
console.log(account1.deposit(500));
console.log(account1.withdraw(800));
console.log(account1.withdraw(1000));
const account2=new BankAccount("Sara", 50000);
console.log(account2);
console.log(account2.deposit(12000));
console.log(account2.withdraw(65000));
const account3=new BankAccount("Michael", 200);
console.log(account3);
console.log(account3.deposit(2200));
console.log(account3.withdraw(1500));


//Create an object taskList with a property tasks (an array of task names). Add methods: addTask(task) to add a task, completeTask(task) to remove it, 
// and listTasks() to print all remaining tasks. Test the object with 4–5 tasks and demonstrate the functionality of each method.

//create a tasklist object with an array of tasks
//addTask(task) method takes a new string as an additional task
//completeTak(task) removes a task from the array of tasks
//listTaks() returns an array of all remaining tasks

const taskList={
   tasks: ["Reading book","Doing laundry","mop floor"],

   addTask(task) {
        return `${this.task} added to tasklist`
   }
}
console.log(taskList.tasks)
console.log(taskList.addTask("jogging"))

//Create a Student object with name, scores (an array), and a method getAverage() that returns the average score. 
//Add another method hasPassed() that returns true if the average is 50 or more, otherwise false. Create and test this for at least two students.

//create an object function that a student name, string, and scores, an array
//to get the average score, add the all the scores, using .reduce method and divide by the length of the array
//to determine if student has passed, use if condition to check if average score is equal to or more than 50

function Student(name, scores){
    this.name = name;
    this.scores=scores;
    this.getAverage=function(){
        const sum=this.scores.reduce((acc,item) => item+acc,0)
        return sum/this.scores.length
    }
    this.hasPassed=function(){
        if (this.getAverage() >=50){
            return true
        }else{
            return false
        }
    }
}
const student = new Student("Janet", [78,56,88,89]);
console.log(student.name);
console.log(student.scores);
console.log(`${student.name}'s average score is ${student.getAverage()}`);
console.log(student.hasPassed());
const student1=new Student("Allan",[45,76,22,34]);
console.log(student1.name);
console.log(student1.scores);
console.log(`${student1.name}'s Average score is ${student1.getAverage()}`);
console.log(student1.hasPassed());

//Create a ShoppingCart object with a property items (an array of item objects with name and price). 
//Add a method addItem(item) to push new items, and a method getTotal() that returns the total cost of all items in the cart. Add 3 items and print the final total.

const ShoppingCart ={
    items: [], 
    addItem(item) {
        const item={name,price};
        this.items.push(item);
    }
    
}
const cart=new ShoppingCart();{
    cart.addItem("toner",350)
    cart.addItem("sunscreen",789)
    cart.addItem("mascarra",430)
    
}

//Create a Movie constructor that takes title, year, and rating. Add a method isClassic() that returns true if the year is before 2000, 
// and a method recommend() that returns a string like "Highly recommended!" if rating is above 8. Create at least 3 movies and call these methods on each.

//create a function constructor with three attributes title,year,rating
//Add a method isClassic to return if movie year year is before 2000, using if condition
//Add a method with if condition that returns string recommend if rating is above 8

function Movie(title,year,rating){
    this.title=title
    this.year=year
    this.rating=rating
    this.isClassic=function(){
        if(this.year> 2000){
            return true
        }else{
            return false
        }
    }
}
