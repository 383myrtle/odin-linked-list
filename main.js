import { LinkedList } from "./LinkedList.js";
import pkg from "enquirer";
const { prompt } = pkg;

const list = new LinkedList();
const options = {
  type: "select",
  name: "choice",
  message: "What would you like to do?",
  choices: [
    { name: "append", message: "Add a node to end of list", value: 1 },
    { name: "prepend", message: "Add a node to start of list", value: 2 },
    { name: "insert", message: "Insert a node at given index", value: 3 },
    { name: "pop", message: "Pop the last node off the list", value: 4 },
    {
      name: "find",
      message: "Find the index of the node with the given value",
      value: 5,
    },
    { name: "contains", message: "Check if a value is in the list", value: 6 },
    { name: "remove", message: "Remove a node at a given index", value: 7 },
    { name: "print", message: "Print the list", value: 8 },
    { name: "exit", message: "Exit", value: 9 },
  ],
};

const promptValue = {
  type: "input",
  name: "value",
  message: "Enter a value",
};

const promptIndex = {
  type: "input",
  name: "index",
  message: "Enter an index",
};

async function main() {
  let answer = await prompt(options);
  let response;
  while (answer.choice !== "exit") {
    switch (answer.choice) {
      case "append":
        response = await prompt(promptValue);
        list.append(response.value);
        break;
      case "prepend":
        response = await prompt(promptValue);
        list.prepend(response.value);
        break;
      case "insert":
        response = await prompt([promptValue, promptIndex]);
        list.insertAt(parseInt(response.index), response.value);
        break;
      case "pop":
        list.pop();
        break;
      case "find":
        response = await prompt(promptValue);
        const searchResult = list.find(response.value);
        if (searchResult) {
          console.log(
            `The value "${response.value}" was found in the node at index: ${searchResult}`
          );
        } else {
          console.log("The value was not found in the list :(");
        }
        break;
      case "contains":
        response = await prompt(promptValue);
        if (list.contains(response.value)) {
          console.log(`The value ${response.value} is in the list!`);
        } else {
          console.log(`The value ${response.value} is not in the list :(`);
        }
        break;
      case "remove":
        response = await prompt(promptIndex);
        list.removeAt(response.index);
        break;
      case "print":
        console.log(list.toString());
        break;
    }
    answer = await prompt(options);
  }
}
main();
