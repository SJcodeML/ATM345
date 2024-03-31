import inquirer from "inquirer";
let myName = "Sidra";
let myBalance = 1000000;
let myPin = 2256;
console.log("Hi " + myName + "! your balance is " + myBalance);
let pin = await inquirer.prompt([
    {
        name: "pin1",
        type: "number",
        message: "Enter Your PIN number",
    },
]);
if (pin.pin1 === myPin) {
    console.log("Your PIN is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option ",
            choices: ["withdraw ", "passed Cash", "checkbalance"],
        },
    ]);
    if (operationAns.operation === "withdraw ") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount",
            },
        ]);
        if (withdrawAns.amount <= myBalance) {
            console.log((myBalance -= withdrawAns.amount));
        }
        else {
            console.log("\n\nYour balance is insufficient! Enter valid amount (check your balance)\n\n");
            let checkbalAgain = await inquirer.prompt([
                {
                    name: "balagain",
                    type: "list",
                    message: "Do you want to check balance? or try again\n\n\n ",
                    choices: ["checkmybalance", "Try again"],
                },
            ]);
            if (checkbalAgain.balagain === "checkmybalance") {
                console.log(myBalance);
            }
            else if (checkbalAgain.balagain === "Try again") {
                let operationAns = await inquirer.prompt([
                    {
                        name: "operation",
                        type: "list",
                        message: "Please select option ",
                        choices: ["withdraw ", "checkbalance", "passed Cash"],
                    },
                ]);
                if (operationAns.operation === "withdraw ") {
                    let withdrawAns = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter your amount",
                        },
                    ]);
                    if (withdrawAns.amount <= myBalance) {
                        console.log((myBalance -= withdrawAns.amount));
                    }
                    else {
                        console.log("your balance is insufficient! Enter valid amount .Check your balance");
                    }
                }
                else if (operationAns.operation === "checkbalance") {
                    console.log("Your current balance is " + myBalance);
                }
                else if (operationAns.operation === "passed Cash") {
                    let passCash = await inquirer.prompt([
                        {
                            name: "Cashlist",
                            type: "list",
                            message: "Choose a amount to withdraw",
                            choices: ["1000", "2000", "5000", "10000"],
                        },
                    ]);
                    let withdrawalAmount = (passCash.Cashlist);
                    myBalance -= withdrawalAmount;
                    console.log(`Operation done successfully. Your amount has been deducted from your balance. Your remaining amount is ${myBalance}. Be safe!`);
                }
            }
        }
    }
    else if (operationAns.operation === "passed Cash") {
        let passCash = await inquirer.prompt([
            {
                name: "Cashlist",
                type: "list",
                message: "Choose a amount to withdraw",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        let withdrawalAmount = (passCash.Cashlist);
        myBalance -= withdrawalAmount;
        console.log(`Operation done successfully. Your amount has been deducted from your balance. Your remaining amount is ${myBalance}. Be safe!`);
    }
    else if (operationAns.operation === "checkbalance") {
        console.log("Your current balance is " + myBalance);
    }
    // this below program is deducting amount from the last amount (remaining amount of the last with drawl)
    // let thou = myBalance -= 1000
    // let twoThou = myBalance -= 2000
    // let fiveThou = myBalance -= 5000
    // let tenThou = myBalance -= 10000
    // if(passCash.Cashlist === "1000")
    // {
    //     console.log(`Operation done successfully , Your amount has been deducting from your balance, your remaining amount is ${thou}, Be safe!`)
    // }
    // else if(passCash.Cashlist === "2000")
    // {
    //     console.log(`Operation done successfully , Your amount has been deducting from your balance, your remaining amount is ${twoThou}, Be safe!`)
    // }
    // else if(passCash.Cashlist === "5000")
    // {
    //     console.log(`Operation done successfully , Your amount has been deducting from your balance, your remaining amount is ${fiveThou}, Be safe!`)
    // }
    // else if(passCash.Cashlist === "10000")
    // {
    //     console.log(`Operation done successfully , Your amount has been deducting from your balance, your remaining amount is ${tenThou}, Be safe!`)
    // }
}
else {
    console.log("Your PIN is incorrect ! Please ENTER the valid PIN number");
}
