import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResults';

const reader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(reader);
matchReader.load();


let wonGames = 0;

for (let match of matchReader.matches){
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin){
        wonGames++;
    } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin){
        wonGames++;
    }
}

console.log(`Man United won ${wonGames} games`);