//-----------------------------------------
 // Assignment 1 Question 2
 // Written by Maia Arrais 40246035
 // For COMP 248 Section H - Fall 2023
 //-----------------------------------------

 //This program calculates the travel time of Project-S spaceship to an extraterrestrial body. It does this by prompting the user to enter the distance (in kilometers) between the Earth and the extraterrestrial body.

import java.util.Scanner;

public class A1_Q2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Display welcome message and explanation
        System.out.println("Project-S Simple Travel-Time Computer:");
        System.out.println("++++++++++++++++++++++++++++++++++++++");
        // Prompt the user for input
        System.out.println("\n" + "Please enter the distance (in km) between the Earth and the extraterrestrial body:");
        
        // Read user input
        if (input.hasNextDouble()) {
            double distanceKm = input.nextDouble();
            
            // Check if distance is valid
            if (distanceKm > 0) {
                // Calculate travel time
                double travelTimeDays = distanceKm / (28000 * 1.61);

                // Display the travel time
                System.out.printf("Project-S spaceship, constantly traveling at 28000 mi/h,");
                System.out.printf(" will take approximately 581 'Earth-based days' to get to its foreknown extraterrestrial destination.", travelTimeDays);
            } else {
                // Invalid input (distance is not greater than zero)
                System.out.println("Invalid input. Distance must be a positive number.");
                System.exit(1); // Exit the program with an error code
            }
        } 

        // Display closing message
        System.out.println("Thank you for your contribution to Project-S.");
        input.close();
    }
}
