# Interview Question

1. #### What will be the output of `!!""`?
2. #### Write a function `createBase` that would allow you to do this?
   ```javascript
   const addSix = createBase(6);
   addSix(10); // returns 16
   addSix(21); // returns 27
   ```
3. #### What will be the output of `typeof NaN`?
4. #### Write a function `counter` that would allow you to this?
   ```javascript
   const a = counter()
   a.add(4)
   a.retrive() // returns 4
   
   a.add(5)
   a.retrive() //returns 9
   
   const b = counter()
   b.add(8)
   b.retrive() // returns 8
   
   b.add(10)
   b.retrive() //returns 18
   ```
5. #### What will be the output of the below snippet and why?
    ```javascript
   const x = 2
   const y = "2"
   x + y
    ```
6. #### What will be the output of the below snippet and why?
    ```javascript
   const x = 2
   const y = "2"
   x + + y
    ```
7. #### Convert this browser code to nodejs code
   ```javascript
   window.customUserName = "User1"
   ```
8. #### What will be the output of the below snippet and why?
   ```javascript
   (function(){
   var a = b = 3;
   })();

   console.log("a defined? " + (typeof a !== 'undefined'));
   console.log("b defined? " + (typeof b !== 'undefined'));
   ```
9. #### How to check if `foo` is an object?
10. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
   ```javascript
   (function() {
        console.log(1); 
        setTimeout(function(){console.log(2)}, 1000); 
        setTimeout(function(){console.log(3)}, 0); 
        console.log(4);
    })();
   ```
11. #### What will be the output of `typeof undefined == typeof null`?
12. #### What will be the output of `typeof typeof 1`?
13. #### What will be the out of the below snippet?
   ```javascript
   let y = 1;
    if (function f() {}) {
        y += typeof f;
    }
    console.log(y);
   ```
14. #### Given a string `Welcome to this Javascript Guide!`, reverse each word in the sentence to look like this `emocleW ot siht tpircsavaJ !ediuG`
15. #### What will be the output of the below snippet and why?
   ```javascript
    const a = {name: "John", personalDetail: "Some details"}
    const b = a
    a.personalDetail = {age: 24, city: "Mexico"}
    
    const z = {name: "Tom", personalDetail: {age: 35, city: "Houston"}}

    console.log(z[b.personalDetail])
   ```
16. #### What will be the output of the following code and why?
   ```javascript
   for (var i = 0; i < 5; i++) {
	    setTimeout(function() { console.log(i); }, i * 1000 );
    }
   ```
17. #### Create the `Calculator` class in Typescript that will allow you to do this?
   ```typescript
   const calculate = new Calculator(5)
   calculate.value // output 5
   calculate.add(5,7) // add method can accept any number args
   calculate.multiply(2).add(4).divide(4).subtract(1)
   calculate.value // output 8.5
   ```
18. #### Find the pairs of array element for which sum is equal to given target value.
   ```javascript
   let ar = [1, 2, 3, 4, 6, 7, 8, 9];

   function x(arr, sum){
    // Create a function
   }
    console.log(x(ar, 9)) // Output [[6,3], [7,2], [8,1]]
   ```
19. #### Find the missing number from unsorted array with O(n) complexity
   ```javascript
   let ar = [2, 7, 8, 5, 1, 4, 3, 6];
   ```
20. #### What will be the output of the below snippet and why?
   ```javascript
    const a = Math.max() > Math.min();
    console.log(a)
   ```
21. #### What will be the output of `console.log(0.2 + 0.1 === 0.3);`?
22. #### What will be the output of `[] == ![];`?
23. #### What will be the output of `"b" + "a" + + "a" + "a";`?
24. #### What will be the output of `true + true + true;`?
25. #### What does the `Record` type in typescript do?
26. #### What is the return type of `JSON.parse()` function?
27. #### When to use the `unknown` keyword? And how it differs from `never`?
28. #### How to make all the properties of the below interface optional?
   ```typescript
   interface IUser {
      name: string
      age: number
      dob: Date
      email: string
      password: string
      lastLoginDate?: Date
      lastLoginIp?:string
   }
   ```
29. #### How to make all the properties of the below interface required?
   ```typescript
   interface IUser {
      name: string
      age: number
      dob: Date
      email: string
      password: string
      lastLoginDate?: Date
      lastLoginIp?:string
   }
   ```
30. #### How to make the `dob` property of the below interface optional?
   ```typescript
   interface IUser {
      name: string
      age: number
      dob: Date
      email: string
      password: string
      lastLoginDate?: Date
      lastLoginIp?:string
   }
   ```
31. #### How to make the `lastLoginDate` property of the below interface required?
   ```typescript
   interface IUser {
      name: string
      age: number
      dob: Date
      email: string
      password: string
      lastLoginDate?: Date
      lastLoginIp?:string
   }
   ```
32. #### Create a function `mergeRoles` that satisfies below type
   ```typescript
   interface IRole {
      resources: {
         resourseId: number
         fields: {
            fieldId: number
            permission: {
               canRead: boolean
               canCreate: boolean
               canEdit: boolean
               canDelete: boolean
            }
         }[]
      }[]
   }
   
   const mergeRoles = (roles: IRole[]): IRole => {}
   ```

33. #### Problems from [Typescript playground](https://www.typescriptlang.org/play?#code/PTAEEEBtNAXALApqARoyB7A7qAjgV0QGdYBLDAOyNAEMAnZByG2RAEzgzgE8AHYgMZ1SvWADpQAMVIAPYAGUMkAG7IEyAsTKVqKbqABW+EqAHwaFAOakrcJD35ExAKGchQARgkBhC6G4Y+KBEvBiwtKC8dBgokIgAtqCUoJaIsACqRIh0oABm+BQC2hQA-KAAkrn+xAA0kXE0WXmyoKSwdRYcWPD6bBjEFADk4TQOyNnRORgCAvg5SAwlzrB8yAAqmdmgALygAN7OoEegFDTxiABcwbDCVjWHxwk0pJBXJLeWzgC+rgI64akMlkcrsABQASiuG2BOwAfPsHkc-lRwsYtrsDscsSczpdQAAiABS8Eo+Pu2Me8WerwJBiIlAAAogZGdeHExH94mTEdjeI0iFgMHQ2Fd8WstB4AEwAZnxPJ+WIYsDmFFAaLo31cbjAkokABEuPTzqZzFZkDY7Mg0JgcH82Mh6XYWKAZKAlSrqOoxv5Ivz2CcwrQKNxnPlCsUXaDuFcLNxIUH9Jjju66KqQz9nMiTKNdjJQQBWAAs4K17mlPlNqUtY2oGCquRsbE2OTDRXIqsdCGdpCqpA49Es+HOFHCpGoFEDfKIWQ46lVbTdaQ9FWbAG0ALpJdR0LBj5DlZvLVYrmEYnl9q4UIdoOjk46nc5vG42Sx3o5PF5Pj6azP-NXAogrgPYENx2UBVx5PZWhFTw6gfPF8WbTwyVAD8aXxdUPCZFl4jZRAOQwLlQC+N99mgq5JTg3FRSQyUULQ0V1UlbDWXZTl8WI0ioIvUBpSox8CSQ2U6gYgl1WlFjcLYwiOJIyDyNAQt+IQpDC3oqlPzE4FC0kvCCKIuSsW4mD82UmiYXzdTqUY4F8106SDPuddXFbCMGwoJtgVBPsSkva9snBBEsR7UBvLYQKU1VdUnHcthQXVOF-2yMQ+x2bZdj7QKAB8sqSugiFXAAGZzFSXVM8qIH9tUUnwGBYZBRlSChslIAQpCFRIbFYOhchoARkFyIVq2tbA8g6pIUAMRAigkQa6ESGIpqKUBd2gWhICwGhuGoZFYGeVVYEFSJon4OgyGIUBlBoSBCCDDg0IkeRzH4JIqium7EGqxbpvCAQ-DQBMEBfOoUHwcIJiG77lviYxwkoSB9F2-bjowU7zuoXJokSd7bqh8JQfCBAMCaKJUeydHLuu27Vpga7Nu21AHWfKwXF-FExvmsCkyOHG8W57FRPxVgSHsxBuQpI54NFcUTGbcWJd4ElmquABONX1ZV0isRoVIrnzAA2UjDMeOhJkAoKJcFgA5QN3tStDaDYNgGGneWKUVygEJt8I7Y4D3mpOfy6DlLEfgzar8wrCwqy9FZHA54b0FG1z22CLgu1HKpXU6H0ByHRAR2oegrTCeBA-iG9LVVK8K62MdF2VVN2DqEKUFL2gGGuD4q67l9WmoSL2BcLMRidsDQRkGNgzqaME3jWNEv5yKXVAABqfxviAA)
