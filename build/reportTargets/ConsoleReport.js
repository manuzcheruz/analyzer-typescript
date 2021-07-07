"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
/**
 * this method prints a report
 * @implements OutputTarget
 */
class ConsoleReport {
    print(report) {
        console.log(report);
    }
}
exports.ConsoleReport = ConsoleReport;
