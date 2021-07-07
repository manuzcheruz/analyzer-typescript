"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResults_1 = require("./MatchResults");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(reader);
matchReader.load();
let wonGames = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResults.HomeWin) {
        wonGames++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        wonGames++;
    }
}
console.log(`Man United won ${wonGames} games`);
