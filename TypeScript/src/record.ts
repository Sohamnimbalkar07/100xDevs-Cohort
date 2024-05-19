type PersonInfo  = {
    name: string,
    age: number,
    email: string
}

type UserInfo =  Record<string, PersonInfo>;

const usersInfo: UserInfo = {
    user1: {
        name: "Soham Nimbalkar",
        age: 23,
        email: "sohamnimbalkar07@gmail.com"
    },
    user2: {
        name: "Mayur Godase",
        age: 25,
        email: "mayurgodase@gmail.com"
    }
};

usersInfo["user2"].age = 23;

console.log(usersInfo);

