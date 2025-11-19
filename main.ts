/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-11-18
 * @fileoverview This program calculates the cost of a meal at a restaurant.
 */

// Declare variables
var subtotal : number = 315.99;
var tax : number = subtotal * 0.13;
var tip : number = subtotal * 0.15;
var total : number = subtotal + tax + tip;
var costPerPerson : number = total / 5;

// Print the output
console.log("Subtotal: $" + String(subtotal));
console.log("Tax: $" + String(tax));
console.log("Tip: $" + String(tip));
console.log("Total: $" + String(total));
console.log("Cost per person: $" + String(costPerPerson));
