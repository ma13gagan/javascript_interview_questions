// All the below questions are related to typescript. Fix/Solve the questions by just changing the types.

// 1. Can you spot a problem on getUser function? If yes, please fix it, and why doesn't a type error occur here?
type TUser = {
    name: string;
    email: string;
};

const getUser = (): TUser => {
    const user = {
        name: "Jhon",
        email: "json@example.com",
        password: "Test123",
    };
    return user;
};

// 2. Do some change in the below code so that x returns the type y passed not any
function x(y: any): any {
    return y;
}

const a = x(54);

// 3. Change the types of findUser function so that if id argument is not passed then it returns IUser[] otherwise IUser
type IUser = {
    id: number;
    name: string;
    email: string;
};

const users: IUser[] = [
    {id: 1, name: "User 1", email: "user1@example.com"},
    {id: 2, name: "User 2", email: "user2@example.com"},
    {id: 3, name: "User 3", email: "user3@example.com"},
    {id: 4, name: "User 4", email: "user4@example.com"},
    {id: 5, name: "User 5", email: "user5@example.com"},
];

function findUser(id?: number) {
    if (id) return users.find((user) => user.id === id) || users[0];
    return users;
}

// 4. Create a generic Form interface for the below form object. form object will always contain two properties value and email. Shape of value
// object can be anything, but error object must only contain properties from value object but those properties value will always be string.

const form = {
    value: {
        email: "test@example",
        name: "Test User",
        phone: 9999999,
        age: 56,
    },
    errors: {
        email: "Not valid email address",
        phone: "Not valid phone number",
    },
};

// 5. Change the types for the below function so that if x and y arguments are both number then number is returned, if both are string then string is returned.
const add = (x: any, y: any): any => {
    return x + y;
};
