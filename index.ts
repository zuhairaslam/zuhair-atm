#! /usr/bin/env node

import inquirer from "inquirer";


interface anstype {
    userid: string,
    userpin: number,
    accountType: string,
    transectionType: string,
    amount: number,
}

const answers: anstype = await inquirer.prompt([
    {
        type: "input",
        name: "userid",
        message: "Kindly enter your user id: "
    },
    {
        type: "number",
        name: "userpin",
        message: "Kindly enter your pin number: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current","Saving"],
        message: "select your account type",
    },
    {
        type: "list",
        name: "transectionType",
        choices: ["Fast Cash","Withdrawal"],
        message: "Please select your transection type",
        when(answers) {
            return answers.accountType
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000,2000,10000,20000],
        message: "Select your amount",
        when(answers) {
            return answers.transectionType == "Fast Cash"
        },
    },
    {
        type: "number",
        name: "amount",
        choices: [1000,2000,10000,20000],
        message: "Select your amount",
        when(answers) {
            return answers.transectionType == "Withdrawal"
        },
    },
])

if (answers.userid && answers.userpin){
    const balance = Math.floor(Math.random()*10000000)
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your remaining balance is $", remaining)
        
    }else{
        console.log("Insuficient Balance");
        
    }
}
