const CSVParser = require('../csvparser')

describe('CSVParser Test', ()=> {
    
    test ("Test readLines", ()=> {
        var mockstring = "Country,City,AccentCity,Region,Population,Latitude,Longitude\n" +
                "ad,aixas,Aixàs,6,1,42.4833333,1.4666667\n" + "ad,aixirivali,Aixirivali,6,,42.4666667,1.5\n" +
                "ad,aixirivali,Aixirivali,6,2,42.4666667,1.5"
                
        var mockparse = ["Country,City,AccentCity,Region,Population,Latitude,Longitude",
            "ad,aixas,Aixàs,6,1,42.4833333,1.4666667",  "ad,aixirivali,Aixirivali,6,,42.4666667,1.5",
            "ad,aixirivali,Aixirivali,6,2,42.4666667,1.5"]

        const csvparser = new CSVParser()
        expect(csvparser.readLines(mockstring)).toStrictEqual(mockparse)
    })
})
