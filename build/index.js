"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResults_1 = require("./MatchResults");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
console.log(reader.data[0][0].toString());
let wonGames = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResults.HomeWin) {
        wonGames++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        wonGames++;
    }
}
console.log(`Man United won ${wonGames} games`);
