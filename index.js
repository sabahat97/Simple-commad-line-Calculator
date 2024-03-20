#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter the first Number", type: "number", name: "firstNumber" },
    { message: "Enter the second Number", type: "number", name: "secondNumber" },
    { message: "select one number of the operators to perfrom operations",
        type: "list",
        name: "operators",
        choices: ["addition", "substraction", "multiplication", "division"],
    },
]);
if (answer.operators === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("press the valid operators");
}
