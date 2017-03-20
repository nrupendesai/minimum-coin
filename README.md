minimum-coins

Angular JavaScript application that given a number of pennies will calculate the minimum number of coins needed to make that amount.

Use:

Download/clone the repository, and open views/index.html in a browser (preferably Chrome). Then enter a Sterling amount (e.g. £1.23) and press Enter.

This application build using Angular 1.5, Bootstrap v3.0, jQuery.

Algorithm

A simple greedy algorithm was used within the application, instead of using dynamic programming. This is due to the requirements for the application specifiying that Sterling coins were used as currency, which thus allowed for the use of a greedy algorithm.

If in the future the application were to be extended, for example to include multiple alternative currencies then a recursive algorithm may need to be added. The following denominations would not work with the current greedy algorithm for example: [1,2,3,4,5].
