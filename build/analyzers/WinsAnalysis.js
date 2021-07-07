"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResults_1 = require("../MatchResults");
/**
 * Analyses the number of wins a team has over the season.
 * It implements the Analyzer interface
 * @implements Analyzer
 * @param team
 */
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResults_1.MatchResults.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResults_1.MatchResults.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
