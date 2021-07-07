import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";

/**
 * will need analysis class to imlement this interface
 */
export interface Analyzer {
    run(matches: MatchData[]): string;
}

/**
 * will need report classes to implement this interface
 */
export interface OutputTarget {
    print(report: string): void;
}

/**
 * the main class where all the magic happens for generating the summary
 */
export class Summary {
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        );
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}