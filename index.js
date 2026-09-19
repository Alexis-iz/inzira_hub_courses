
import boxen from "boxen"; 
import chalk from "chalk";


console.log(chalk.blue(`My name is ${chalk.bold("Alexis")}.`));
console.log(chalk.green.italic(`I am learning ${chalk.bold.yellow("Node.js")}.`));
console.log(chalk.green.italic("I am excited to appply these skills to my on going projects"));
console.log(chalk.green.italic("Day 1 is complete!"));
console.log(chalk.green.italic("Thank you for your cooperation!."));

let r=5;
const pi=3.14;
let area=r*r*pi;
console.log(`Area of the Circle is: ${area}`)

let a=10;
let b=15;
console.log(a+b,a-b,a*b,a/b,a%b);
if (a<b){
    console.log(` ${a} is less than ${b}`)
}       
        else if (a>b){console.log(` ${a} is greater than ${b}`)
        }
        else {console.log(` ${a} is equal to ${b}`)
    }                       

