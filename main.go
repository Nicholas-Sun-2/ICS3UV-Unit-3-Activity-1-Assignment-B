/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-11-18
 * @fileoverview This program calculates the cost of a meal at a restaurant.
 */

package main

import "fmt"

func main(){
	// Declare variables
	var subtotal float32 = 315.99;
	var tax float32 = subtotal * 0.13;
	var tip float32 = subtotal * 0.15;
	var total float32 = subtotal + tax + tip;
	var costPerPerson float32 = total / 5.0;

	// Print the output
	fmt.Println("Subtotal: $" + fmt.Sprint(subtotal));
	fmt.Println("Tax: $" + fmt.Sprint(tax));
	fmt.Println("Tip: $" + fmt.Sprint(tip));
	fmt.Println("Total: $" + fmt.Sprint(total));
	fmt.Println("Cost per person: $" + fmt.Sprint(costPerPerson));
}
