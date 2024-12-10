// Q-1

function sumofTwoNumbers(a,b){
    console.log(`sum of two numbers:${a+b}`)
}
sumofTwoNumbers(30,50);

console.log("..................................");

// Q-2

function print(a){
    res=a.toUpperCase()
    console.log(res);
}
print("sreya");

console.log("....................................");

// Q-3

function funOne(a,b){
    console.log(a,b);

}
funOne(30);
console.log("...................................");


// Q-4

function array(a){
    if(a==0){
        console.log("empty");
    }
    else{
        console.log("not empty");
    }

}
array([]);

console.log("..................................");

// Q-5

function diffofTwoNumbers(a,b){
    console.log(`difference of two numbers:${a-b}`)
}
diffofTwoNumbers(30,10);

console.log("...................................");

// Q-6

function greeting(name,age){
    console.log(`Hello, ${name}! you are ${age} years old.`);

}
greeting("sreya","22");

console.log("...................................");


// Q-7

function funTwo(a){
    if(a==0){
        console.log("0")
    }
    else if(a%2==0){
        console.log("true");
    }
    else{
        console.log("false")
    }
}
funTwo(12);

