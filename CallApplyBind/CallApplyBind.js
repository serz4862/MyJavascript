const User ={
    name: "Saurav",
    Print(){
        console.log(this.name);
    }
}

const User2 ={
    name:"Ishika"
}


User.Print()

User.Print.call(User2)

// Call helps one object to borrow other's method.


/* In the above segment of the code, when we used the call method over User.Print and pass the reference as User2
In the backend, it embedded the print method in the User2.

Now the code become like 

const User2 ={
name:"Ishika",
Print(){
    console.log(`${this.name}`)}
}

 */