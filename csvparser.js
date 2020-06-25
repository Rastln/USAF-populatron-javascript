class CSVParser{
    constructor() {
        
    }
    readLines(lines) {
        const parsedCSV = lines.split('\n')
        return parsedCSV
    }
}

module.exports = CSVParser