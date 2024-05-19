interface user {
    firstName: string,
    lastname: string,
    email: string,
    age: number
}

function isLegal(user: user): boolean {
    if(user.age>= 18){
        return true
    }
    else{
        return false
    }
}

const b = isLegal({
    firstName: "soham",
    lastname: "nimbalkar",
    email: "sohamnimbalkar07@gmail.com",
    age: 18
});

console.log(b);