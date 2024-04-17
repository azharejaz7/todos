#!/usr/bin/env node

import inquirer from "inquirer";

// What you want to add in your todos.

let todos = [];
let condition :boolean = true;
while(condition){
let addTask = await inquirer.prompt([
  {
    message: "What do you want to add in your todos ? ",
    name: "todo",
    type: "input",
  },
  {
    message: "Do you want to add more todos? :",
    name: "addMore",
    type: "confirm",
    default:"false"
  }
]);

todos.push(addTask.todo);
condition = addTask.addMore;
console.log(todos);
}