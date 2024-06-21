"use strict";
// Async Assigments
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Question 1 
// Write a simple asynchronous TypeScript function fetchGreeting that returns a 
// greeting message after a 2-second delay using setTimeout.
function fetchGreeting(message) {
    return __awaiter(this, void 0, void 0, function* () {
        setTimeout(() => (console.log(message)), 2000);
    });
}
fetchGreeting("Hello World");
// Question 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
function simulateTask() {
    console.log("Task Started");
    setTimeout(() => (console.log("Task Completed"), 1000));
}
simulateTask();
// Question 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("Data fetched successfully!"), 1000));
}
fetchData().then((data) => console.log(data));
// Question 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Data Fetched Successfully again!");
            }
            else {
                reject("Data Fetch Failed");
            }
        }, 1000);
    });
}
fetchWithError().then((data) => console.log(data)).catch(error => console.log(error));
// Question 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
function fetchedData() {
    return new Promise((resolve) => setTimeout(() => {
        console.log("Fetch Data");
        resolve("Data Fetched");
    }, 1000));
}
function processData() {
    return new Promise((resolve) => setTimeout(() => {
        console.log("Processing data");
        resolve("Data Processed");
    }, 2000));
}
function executeSequentially() {
    fetchedData().then((data) => console.log(data));
    processData().then((data) => console.log(data));
}
executeSequentially();
