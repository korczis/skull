var fs = require('fs');

var book1 = '../../_out/book1.txt';
var book2 = '../../_out/book2.txt';
var book1_and_book2 = '../../_out/book1_and_book2.txt';

var splitText = function (input) {
    if (!input) {
        throw 'No input specified';
    }
    if (typeof input !== 'string') {
        throw 'Input have to be string';
    }

    var rows = input.split('\n');


    var file1 = '';
    var file2 = '';

    rows.map(function (row) {
        console.log(row);
    });

    for (var i = 0; i < rows.length; i++) {
        if (i < rows.length / 2) {
            if (file1 != '') {
                file1 += '\n';
            }
            file1 += rows[i];
        } else {
            if (file2 != '') {
                file2 += '\n';
            }
            file2 += rows[i];
        }
    }

    return [file1, file2];

};

var splitBook = function (input, output1, output2) {
    fs.readFile(input, function (err, data) {
        if (err) {
            throw err;
        }

        var splittedData = splitText(data.toString());
        console.log('splittedData: ' + splittedData);
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