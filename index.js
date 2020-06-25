// entry point of the application
const FileReader = require('./filereader')
const CSVParser = require('./csvparser')
const PopulationCounter = require('./populationcounter')

var reader = new FileReader()
var parser = new CSVParser()
var popCounter = new PopulationCounter(reader, parser)

console.log("The population of the world is: " + popCounter.count(process.argv[2]).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))