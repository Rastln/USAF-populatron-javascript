// entry point of the application
const FileReader = require('./filereader')
const CSVParser = require('./csvparser')
const PopulationCounter = require('./populationcounter')

var reader = new FileReader()
var parser = new CSVParser()
var popCounter = new PopulationCounter(reader, parser)

class Index {
    constructor() {}

    printPopulation(filename) {
        console.log("The population of the world is: " + popCounter.count(process.argv[2]))
    }
}

const index = new Index();
index.printPopulation();

module.exports = Index