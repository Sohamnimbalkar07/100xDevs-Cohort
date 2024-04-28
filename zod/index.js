const zod = require("zod");

//requires array of numbers
const schema = zod.array(zod.number());

const arr = [1,3,5,4];

const res = schema.safeParse(arr);

console.log(res);

function validateInput(obj) {

    const schema = zod.object({
        email : zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response)
}

validateInput({
    email : 'sohamnimbalkar07@gmail.com',
    password : '12345678'
})

