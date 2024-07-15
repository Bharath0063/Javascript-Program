//1. FIZZBUZZ

let i
for(i=1;i<=100;i++)
    if(i%3==0 && i%5==0)
        document.write(" FIZZBUZZ ")
    else if(i%3==0)
        document.write(" FIZZ ")
    else if(i%5==0)
        document.write(" BUZZ ")
    else
        document.write(i+" ")

//7. fahrenheit to celsius

function solution(celsius){
    let Fahrenheit=(celsius*(9/5))+32;
    return Fahrenheit;
}
let celsius=21;
console.log(solution(celsius))

//6.factorial

function fact(num3){
    let sum=1
    for(let i=1;i<=num3;i++)
        sum=sum*i
    return sum
}
let num3=4
console.log(fact(num3))

//8.Missing number
 function num2(arr)
 {
    let count=1;
    for(let i=0;i<=arr.length;i++)
        if(count!=arr[i])
            return count
        else
            count++
        
 }
 let arr1=[1,2,3,4,5,6,8,9]
 console.log(num2(arr1))


 //2.palindrome
 function palindrome(word){
    let str1=text;
    let str2=word.split('').reverse().join('');
    if(str1==str2){
        console.log("Palindrome");
    }
    else{
        console.log("Not a Palindrome");
    }
}
let text="madam";
palindrome(text)

//3.largest number in array

function largest(num1){
    let max=-123;
    for(let i=0;i<arr.length;i++){
        if(max<num1[i]){
            max=num1[i];

        }
    }
    return max;
}
let arr=[10,20,30,40,50];
let max_val=largest(arr);
console.log(max_val);








