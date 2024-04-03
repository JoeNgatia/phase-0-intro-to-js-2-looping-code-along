// index.js

function writeCards(namesArray) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
        thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful gift!`);
    }
    return thankYouMessages;
}

function countDown(number) {
    if (number < 0) {
        console.log("Please provide a positive integer.");
        return;
    }

    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

module.exports.writeCards = writeCards;
module.exports.countDown = countDown;

