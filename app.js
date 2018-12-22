/*Digital Clock Folder - Javascript
This project shows & updates a clock continuously on a web page.*/

function clock() {
	const fullDate = new Date();
	var hours = fullDate.getHours();
	var mins = fullDate.getMinutes();
	var secs = fullDate.getSeconds();
	/*The above sets the initial variables
	  with the current time. "const" initiates 
	  a constant called "fullDate" that gets the
	  time from the "Date()" function. The 
	  remaining variables can't be const 
	  due to the values continuously change.
	  With the "Date()" function, you can use 
	  ".getHours()", ".getMinutes()", ".getSeconds()", etc.
	  to get the desired time units*/

	if (hours<10) {
		hours = "0" + hours;
	}
	if (mins<10) {
		mins = "0" + mins;
	}
	if (secs<10) {
		secs = "0" + secs;
	}
	if (hours<12) {
		secs = secs + "&nbsp; am";
	}
	if (hours===12) {
		secs = secs + "&nbsp; pm";
	}
	if (hours>12) {
		hours = hours - 12;
		secs = secs + "&nbsp; pm";
	}
	/*The above "if-then" statements compare the hours to 
	  12 to subtract 12 after noon & adds "am" or "pm".*/

	document.getElementById('hour').innerHTML = hours + ":";
	document.getElementById('minute').innerHTML = mins + ":";
	document.getElementById('second').innerHTML = secs;
	/*Use "document.getElementById()" to grab an id tag in HTML.
	  This uses the "getElementById()" with ".innerHTML" to set 
	  the time id tags in HTML to the time-value variables here 
	  in Javascript.*/

}
/*This function gets the time using the "Date()" function 
  and converts the time to 12-hours & adds "am" or "pm".*/

setInterval(clock, 100);
/*This sets the interval for the number of milliseconds to pass
 (1 sec = 1000 millsec)*/
