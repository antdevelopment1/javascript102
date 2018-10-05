// Checks to see if its time to go to work based on the day of the week.
var user_input = parseInt(prompt("Enter a number to represent the day of the week? "));
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
if (user_input === 0 || user_input === 6) {
    console.log(`Today is ${week[user_input]}. No work for today!`);
} else if (user_input !== 0 || user_input !== 6) {
    console.log(`It\'s ${week[user_input]}. Today is a work day. Time to get ready.`);
} 