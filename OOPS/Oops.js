// Object literal


const user = {
    username: "saurav",
    Password: "1234",
    LoggedIn: 8,
    SignedIn: true,
    getUser: function(){
        console.log(`I am a user ${this.username}`)

    }
}

console.log(user.username)
console.log(user.Password)