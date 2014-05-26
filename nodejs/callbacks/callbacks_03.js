/**
 * This callback takes the data form readBook(); function and use it for another operations
 * @callback dataCallback
 * @param {Object} book data content
 */

var fs = require('fs');

var book1 = '../../_data/book1.txt';
var book2 = '../../_data/book2.txt';
var destination = '../../_out/book1_and_book2.txt';

/**
 * Read text file (book), when finish call the callback function
 * @param {String} bookName Path to file (book) to be read
 * @param {dataCallback} callback - The callback that handles data
 */
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
 * Takes two inputs concatenate them and output them into new file
 * @param {String} input1 input file name
 * @param {String} input2 input file name
 * @param {String} output output file name
 */
var bookConcate = function (input1, input2, output) {

    readBook(input1, function (data) {
        console.log('readBook(book1, callback) - start');

        var data1 = data;
        console.log(data1.toString());

        readBook(input2, function (data) {
            console.log('readBook(book2, callback) - start');

            var data2 = data;
            console.log(data2.toString());

            var data3 = data1 + data2;
            writeBook(output, data3);

            console.log('readBook(book2, callback) - end');
        });

        console.log('readBook(book1, callback) - end');
    });
};

bookConcate(book1, book2, destination);
