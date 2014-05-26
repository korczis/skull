var fs = require('fs');

var book1 = '../../_data/book1.txt';
var book2 = '../../_data/book2.txt';
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

readBook(book1, function (data) {
    console.log('readBook(book1, callback) = ');

    var data1 = data;
    console.log(data1);

    readBook(book2, function (data) {
        console.log('readBook(book2, callback)');

        var data2 = data;
        console.log(data2);

        var data3 = data1 + data2;
        writeBook(destination, data3);
    });
});
