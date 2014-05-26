var fs = require('fs');

var book1 = '../../_data/book1.txt';
var destination = '../../_out/book1_new.txt';

var readBook = function (bookName) {
    console.log('readBook() - start');

    fs.readFile(bookName, function (err, data) {
        console.log('readBook() -> fs.readFile - start');

        if (err) {
            console.log(err);
            throw err;
        }

        writeBook(destination, data);

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

readBook(book1);

