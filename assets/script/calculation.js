myApp.service("calculate", function (){
	this.currency = [200, 100, 50, 20, 2, 1],

	  /**
	   * Calculates the minimum number of coins needed to make amount from given Float.
	   * - Iterates through each coin starting at the largest.
	   * - If current coin is smaller/equal to # of pennies, then calculates the number (n)  
	   *   of whole coins which can divide into current # number of pennies.
	   * - (n) is then added to the results object.
	   * - The # of pennies is then set to the remainder of the previous calculation.
	   * - This iteration stops when the number of pennies has reached 0.
	   * Returns an object holding the coins and quantities of each.
	   * @param {Float} pennies
	   * @return {Object} results
	   */
	  this.minimumCoins= function(pennies) {
	    var results = {},
	        currentCoin;

	    // Init of counter, to hold index of coin
	    var x = 0;
	    // While the number of pennies != 0
	    while (pennies) {
	      // Get the next coin from currency array
	      currentCoin = this.currency[x++];
	      // If the coin is smaller/equal to the current # of pennies
	      if (pennies >= currentCoin) {
	    	 if(currentCoin < 100){
	    		 results[currentCoin+"p"] = this.numberOfCoins(pennies, currentCoin);
	    	 }else if(currentCoin >= 100){
	    		 results["£"+(currentCoin/100)] = this.numberOfCoins(pennies, currentCoin);
	    	 }
	        
	        pennies = this.remainingPennies(pennies, currentCoin);
	      }
	    }

	    return results;
	  }

	  /**
	   * Calculates the number (n) of whole coins which can divide into an amount of pennies.
	   * Returns an Integer representing n.
	   * @param {Float} pennies
	   * @param {Integer} coin
	   * @return {Integer} n
	   */
	  this.numberOfCoins= function(pennies, coin) {
	    return Math.floor(pennies / coin);
	  }

	  /**
	   * Calculates the number of remaining pennies, using modulus.
	   * Returns an Integer representing the remaining pennies.
	   * @param {Float} pennies
	   * @param {Integer} coin
	   * @return {Integer} remaining
	   */
	  this.remainingPennies= function(pennies, coin) {
	    return pennies % coin;
	  }
});