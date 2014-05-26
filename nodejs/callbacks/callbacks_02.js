var fs = require('fs');

var book1 = '../../_data/book1.txt';
var destination = '../../_out/book1_new.txt';

var readBook = function (bookName, callback) {
    console.log('readBook() - start');

    fs.readFile(bookName, function (err, data) {
        console.log('readBook() -> fs.readFile - start');

        if (err) {
            console.log(err);
            throw err;
        }

        callback(data);

        console.log('readBook() -> fs.readFile - end');
    });

    console.log('readBook() - end');
};

/**
 * Writes book content to book file specified
 * @param {String} bookName File to write to
 * @param {String} bookContent Content to be written to file
 */
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

/**
 * Take input and re-save it to output
 * @param {String} input input file name
 * @param {String} output output file name
 */
var bookCopy = function(input, output) {

    readBook(input, function(data) {
        writeBook(output, data);
    });

};

bookCopy(book1, destination);