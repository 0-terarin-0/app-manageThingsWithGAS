function doGet() {
    const html = HtmlService.createTemplateFromFile('index').evaluate();
    html.addMetaTag('viewport', 'width=device-width, initial-scale=1');
    return html;
}

function registerData(a) {
    const SHEETS = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Log');
    SHEETS.appendRow(a);
    return;
}