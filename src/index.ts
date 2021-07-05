import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResults';

const reader = new CsvFileReader('football.csv'); 
reader.read();

console.log(reader.data[0][0].toString());

let wonGames = 0;

for (let match of reader.data){
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin){
        wonGames++;
    } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin){
        wonGames++;
    }
}

console.log(`Man United won ${wonGames} games`);