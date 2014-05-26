var fs = require('fs');

var book = '../../_data/book1.txt';

/**
 * Read text file (book) and output its content to console
 * @param {String} bookName Path to file (book) to be read
 */
var readBook = function (bookName) {
    console.log('readBook() - start');

    fs.readFile(bookName, function (err, data) {
        console.log('readBook() -> fs.readFile - start');

        if (err) {
            console.log(err);
            throw err;
        }

        console.log('readBook() -> fs.readFile - book content');
        console.log(data.toString());

        console.log('readBook() -> fs.readFile - end');
    });

    console.log('readBook() - end');
};

readBook(book);
