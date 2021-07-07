import { OutputTarget } from "../Summary";

/**
 * this method prints a report
 * @implements OutputTarget
 */
export class ConsoleReport implements OutputTarget {
    print(report: string): void {
        console.log(report)
    }
}