// Prompts the user for bill total and quality of service.
billTotal = parseInt(prompt('What was the total of your bill? '));
serviceRate = prompt('Was your service good, fair, or bad.').toLowerCase();

// Checks to see if service is good fair or bad to calculate end total.
if (serviceRate === 'good') {
    billTotal = (billTotal * .2) + billTotal;
    console.log(`Your bill is $${billTotal} dollars.`);
} else if (serviceRate === 'fair') {
    billTotal = (billTotal * .15) + billTotal;
    console.log(`Your bill is $${billTotal} dollars.`);
} else if (serviceRate === 'bad') {
    billTotal = (billTotal * .10) + billTotal;
    console.log(`Your bill is $${billTotal} dollars.`);
}