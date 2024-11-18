/*jslint es6 */
'use strict'
const f2m = require("./flac2mp3");
const fs = require('fs');
const path = require('path');
//
const flacFilePath = "./test/Slash/Orgy of the Damned";
const dirPath = path.resolve(flacFilePath); 
const ext = ".flac";

console.log("Flac to mp3 convertor", flacFilePath);

const converter = (filePath => {
    console.log(filePath);
    f2m.convert(
        filePath,
        function (data) {
            console.log(data.err.toString())//it will log detail in progress data, wait for completion
        }
    );
});
let filesList = [];
try {
    fs.readdir(dirPath, function (err, files) {
        filesList = files.filter( e => {
            return path.extname(e).toLowerCase() === ext
        });
        if (filesList.length > 0) {
            filesList.forEach(element => {
                // convertor(dirPath + "\\" + element);// windows concatenation
                converter(path.join(dirPath, element))
            });
        }
        else {
            console.log("No files ...")
        }
    });
} catch (error) {
    console.log("Error: ", error)
}
