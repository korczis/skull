var fs = require('fs');

var book1 = '../../_out/book1.txt';
var book2 = '../../_out/book2.txt';
var book1_and_book2 = '../../_out/book1_and_book2.txt';


/**
 * Split the input text in half and returns array with first hals and second half
 * @param {String} input text string
 * @returns {string[]} Returns an array for two strings
 */
var splitText = function (input) {
    if (!input) {
        throw 'No input specified';
    }
    if (typeof input !== 'string') {
        throw 'Input have to be string';
    }

    var tmpBook1 = input.slice(0, input.length / 2);
    var tmpBook2 = input.slice(input.length / 2, input.length);

    return [tmpBook1, tmpBook2];

};

/**
 * Take one book and split it in half into two separate books
 * @param {String} input input file name
 * @param {String} output1 output1 file name
 * @param {String} output2 output2 file name
 */
var splitBook = function (input, output1, output2) {
    fs.readFile(input, function (err, data) {
        if (err) {
            throw err;
        }

        var splittedData = splitText(data.toString());
        writeBook(output1, splittedData[0]);
        writeBook(output2, splittedData[1]);
    });
};

var writeBook = function (bookName, bookContent) {
    console.log('writeBook() - start');

    fs.writeFile(bookName, bookContent, function (err) {
        console.log('writeBook() -> fs.writeFile - start');

        if (err) {
            console.log(err);
            throw err;
        }
        console.log('writeBook() : ' + bookName + ' saved!');

        console.log('writeBook() -> fs.writeFile - end');
    });

    console.log('writeBook() - end');
};


splitBook(book1_and_book2, book1, book2);