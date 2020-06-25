class PopulationCounter {

    constructor(Reader, Parser) {
        this.Reader = Reader
        this.Parser = Parser
    }

    count(filename){
        var parsedCSV = this.Parser.readLines(this.Reader.readFile(filename))
        var total = 0
        for(var i = 1; i < parsedCSV.length; i++) {           
            const words = parsedCSV[i].split(',')
            if (!isNaN(words[4].charCodeAt(0)))
                total +=  parseInt(words[4])
        }
        return total
    }
}

module.exports = PopulationCounter