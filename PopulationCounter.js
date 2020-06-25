const FileReader = require('./filereader')
const CSVParser = require('./csvparser')

class PopulationCounter {

    constructor(reader, parser) {
        this.reader = reader
        this.parser = parser
    }

    count(filename){
        var parsedCSV = this.parser.readLines(this.reader.readFile(filename))
        var total = 0
        for(var i = 1; i < parsedCSV.length; i++) {           
            const words = parsedCSV[i].split(',')
            if (words[4] !== "" && words[4] !== undefined && !isNaN(words[4]))
                total +=  parseInt(words[4])
        }
        return total
    }
}

module.exports = PopulationCounter