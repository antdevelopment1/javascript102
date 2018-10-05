// Prompts the user for bill total and quality of service.
billTotal = parseInt(prompt('What was the total of your bill? '));
serviceRate = prompt('Was your service good, fair, or bad.').toLowerCase();
split_between = parseInt(prompt('How many people are in your party? '));

// Checks to see if service is good fair or bad to calculate end total.
if (serviceRate === 'good') {
    billTotal = ((billTotal * .2) + billTotal) / split_between;
    console.log(`Your bill is $${billTotal} dollars.`);
} else if (serviceRate === 'fair') {
    billTotal = ((billTotal * .15) + billTotal) / split_between;
    console.log(`Your bill is $${billTotal} dollars.`);
} else if (serviceRate === 'bad') {
    billTotal = ((billTotal * .10) + billTotal) / split_between;
    console.log(`Your bill is $${billTotal} dollars.`);
}