import XLSX from 'xlsx';

export function workBookToJSON(workbook) {
    const result = workbook.SheetNames.reduce(function(acc, sheetName) {
        const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        if (sheet.length) {
            acc[sheetName] = sheet;
        }

        return acc;
    }, {});

    return JSON.stringify(result, 2, 2);
}