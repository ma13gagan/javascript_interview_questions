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
11. #### What will be the output of `typeof undefined == typeof Null`?
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
17. #### Find the pairs of array element for which sum is equal to given target value.
   ```javascript
   let ar = [1, 2, 3, 4, 6, 7, 8, 9];

   function x(arr, sum){
    // Create a function
   }
    console.log(x(ar, 9)) // Output [[6,3], [7,2], [8,1]]
   ```
18. #### Find the missing number from unsorted array with O(n) complexity
   ```javascript
   let ar = [2, 7, 8, 5, 1, 4, 3, 6];
   ```
19. #### What will be the output of the below snippet and why?
   ```javascript
    const a = Math.max() > Math.min();
    console.log(a)
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
25. #### [Typescript playground](https://www.typescriptlang.org/play?#code/PTAEEEBtNAXALApqARoyB7A7qAjgV0QGdYBLDAOyNAEMAnZByG2RAEzgzgE8AHYgMZ1SvWADpQAMVIAPYAGUMkAG7IEyAsTKVqKbqABW+EqAHwaFAOakrcJD35ExAKGchQARgkB1c7FCk1OqgvHQYKJCIALagWKQIqOjYphhsyBYcAGayAeLOsHzIACoAqkSIdKAAvKAA3s6gjU2NFDRRiABcoCTCVgA0Dc1N0TSkkF09NpaDjQC+rgI6-paIsGUV1aAAFACUHaXllVUAfHUzKVT+xhs19UNNre1dAEQAUvCUzwP3jSNjLwYiJQAAKIGRtXiRMSLKJfc7NXg0IhELAYOhsF5FLQeABMAGZnud5s0GLB8HQKKBrnRnPM3GAcRIACJcIHtUzmKzIGx2ZBoTCkHCLNLdLgIFigGSgUnkqi8hzIfSI5HsUAUDD+CzcZyZfAUATaSkyLbcLpava0Cj6O5NGUU0DaumLS60TbGgCsABYdq53HiJABhTkreUFRygDCZUDZChsdaVXX6w2iuwS0hR0gceiWfDtCj+QJqjUhJHlDjqSnxaWrWXUACS8YA2gBdCPqOhxcqgBuHfKFbvxzY2xqZjoUXNoOjfB5tTrdWC9SzT35RUbjeeL2kLJZUw5ELo9iotzaN861UeePpq2cvQceL6gP7r54eYHcaEYWGzZd1C84q+PHOzyDjiD5Pi8OJvh+X4-ueGKgHiAE3qAwGHAhYGrv8KF4lBMLPN+Z4Xp6SFPChg6ehha4vJ6uGfvhsEXu6JFAYO7qUVhzzurRMHOM2riJga5CUjGcaHFsmYAPxdOOUSTjsw4BJk4lsDs1Zkva1JOCJWzUtUpzUmImbVFUNSZqpAA+5m7hURCNgADHxJI1hpe60kAA)