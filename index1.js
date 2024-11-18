/*jslint es6 */
'use strict'
const FlacConverter = require("./flacConverter");
const fs = require('fs');
const path = require('path');
//
const flacFilePath = "./test/Adam Angst - Alphatier.flac"
const dirPath = path.resolve(flacFilePath); 
const ext = ".flac";

console.log("Flac to mp3 convertor", flacFilePath);

const flacConverter = new FlacConverter()

flacConverter.convertFile(flacFilePath)
