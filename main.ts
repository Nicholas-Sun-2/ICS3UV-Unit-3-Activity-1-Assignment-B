/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-11-18
 * @fileoverview This program calculates the cost of a meal at a restaurant.
 */

// Declare variables
let subtotal : number = 315.99;
let tax : number = subtotal * 0.13;
let tip : number = subtotal * 0.15;
let total : number = subtotal + tax + tip;
let costPerPerson : number = total / 5;

// Print the output
console.log("Subtotal: $" + String(subtotal));
console.log("Tax: $" + String(tax));
console.log("Tip: $" + String(tip));
console.log("Total: $" + String(total));
console.log("Cost per person: $" + String(costPerPerson));
