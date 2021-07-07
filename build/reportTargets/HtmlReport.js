"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
class HtmlReport {
    print(report) {
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `;
        require('fs').writeFileSync('report.html', html);
    }
}
exports.HtmlReport = HtmlReport;
