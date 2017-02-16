myApp.service("parse", function(){
	 this.newParser = function(str) {
		    // Check if string contains pound sign and hold state.
		    var convert = false;
		    
		    if (this.isPound(str)) {
		      convert = true;
		    }

		    str = this.removeNonNumeric(str);

		    var num = parseFloat(str);
		    // If Float is a decimal or orignal String contained a pound sign,
		    // then convert from pounds to pennies.
		    if (this.isDecimal(num) || convert) {
		      num = this.convertToPennies(num);
		    } 

		    return num;
		  }

		  /**
		   * Tests if String contains a '£' character.
		   * Returns true if present.
		   * @param {String} str
		   * @return {Boolean} result
		   */
		  this.isPound = function(str) {
		    return (str.indexOf('£') !== -1);
		  }

		  /**
		   * Using regex, removes any amount of '£' and/or 'p' from String.
		   * Returns modified String.
		   * @param {String} str
		   * @return {String} str
		   */
		  this.removeNonNumeric= function(str) {
		    return str.replace(/[£p]+/g, '');
		  }

		  /**
		   * Tests if Float is decimal, by calculating the modulus of 1 of the number.
		   * Returns true if Float is decimal.
		   * @param {Float} num
		   * @return {Boolean} result
		   */
		  this.isDecimal= function(num) {
		    return (num % 1 !== 0);
		  }

		  /**
		   * Converts pounds to pennies by multiplying by 100 and rounding to 2 decimal places.
		   * Returns modified Float.
		   * @param {Float} num
		   * @return {Float} num
		   */
		  this.convertToPennies= function(num) {
		    return (num.toFixed(2) * 100);
		  }
});